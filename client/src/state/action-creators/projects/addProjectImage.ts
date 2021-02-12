import axios from 'axios';
import { Dispatch } from 'redux';
import { ModalActionTypes, ProjectActionTypes } from 'state';

export const addProjectImage = (id: string, imageData: File | null) => async (
  dispatch: Dispatch
) => {
  if (!imageData) {
    const errors = [{ message: 'Please select an image', field: 'image' }];
    dispatch({
      type: ProjectActionTypes.ADD_PROJECT_IMG_FAILURE,
      payload: errors,
    });
    return;
  }

  try {
    dispatch({ type: ProjectActionTypes.ADD_PROJECT_IMG_REQUEST });
    const ContentType = imageData.type;
    const headers = { headers: { ContentType } };

    const uploadConfig = await axios.get('/api/uploads');
    await axios.put(uploadConfig.data.url, imageData, headers);

    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await axios.patch(
      `/api/projects/${id}`,
      { image: uploadConfig.data.key },
      config
    );

    dispatch({
      type: ProjectActionTypes.ADD_PROJECT_IMG_SUCCESS,
      payload: data,
    });
    const success = { displayModal: false };
    dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: success });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({
      type: ProjectActionTypes.ADD_PROJECT_IMG_FAILURE,
      payload: errors,
    });
    return;
  }
};
