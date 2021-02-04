import axios from 'axios';
import { Dispatch } from 'redux';
import { ModalActionTypes, ProjectActionTypes } from 'state';

export const updateProject = (
  formData: any,
  id: string,
  imageData: { type: string } | null
) => async (dispatch: Dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };

  try {
    if (imageData) {
      dispatch({ type: ProjectActionTypes.UPDATE_PROJECT_REQUEST });
      const ContentType = imageData.type;
      const headers = { headers: { ContentType } };

      const uploadConfig = await axios.get('/api/uploads');
      await axios.put(uploadConfig.data.url, imageData, headers);

      const { data } = await axios.put(
        `/api/projects/${id}`,
        { ...formData, image: uploadConfig.data.key },
        config
      );
      dispatch({
        type: ProjectActionTypes.UPDATE_PROJECT_SUCCESS,
        payload: data,
      });

      const success = { displayModal: false };
      dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: success });
    } else {
      dispatch({ type: ProjectActionTypes.UPDATE_PROJECT_REQUEST });
      const { data } = await axios.put(`/api/projects/${id}`, formData, config);
      dispatch({
        type: ProjectActionTypes.UPDATE_PROJECT_SUCCESS,
        payload: data,
      });

      const success = { displayModal: false };
      dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: success });
    }
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({
      type: ProjectActionTypes.UPDATE_PROJECT_FAILURE,
      payload: errors,
    });
    return;
  }
};
