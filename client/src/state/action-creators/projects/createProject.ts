import axios from 'axios';
import { Dispatch } from 'redux';
import { ModalActionTypes, ProjectActionTypes } from 'state';

export const createProject = (
  formData: any,
  imageData: { type: string } | null
) => async (dispatch: Dispatch) => {
  if (!imageData) {
    const errors = [{ message: 'Please select an image', field: 'image' }];
    dispatch({
      type: ProjectActionTypes.CREATE_PROJECT_FAILURE,
      payload: errors,
    });
    return;
  }

  try {
    dispatch({ type: ProjectActionTypes.CREATE_PROJECT_REQUEST });
    const uploadConfig = await axios.get('/api/uploads');
    const ContentType = imageData.type;
    const headers = { headers: { ContentType } };
    await axios.put(uploadConfig.data.url, imageData, headers);

    const config = { headers: { 'Content-Type': 'application/json' } };
    const requestBody = { ...formData, mainImage: uploadConfig.data.key };
    const { data } = await axios.post('/api/projects', requestBody, config);
    dispatch({
      type: ProjectActionTypes.CREATE_PROJECT_SUCCESS,
      payload: data,
    });

    const successPayload = { displayModal: false };
    dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: successPayload });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({
      type: ProjectActionTypes.CREATE_PROJECT_FAILURE,
      payload: errors,
    });
    return;
  }
};
