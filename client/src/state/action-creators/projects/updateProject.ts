import axios from 'axios';
import { IProjectForm } from 'interfaces/forms';
import { Dispatch } from 'redux';
import { ModalActionTypes, ProjectActionTypes } from 'state';

const { UPDATE_PROJECT_FAILURE, UPDATE_PROJECT_SUCCESS } = ProjectActionTypes;
const { TOGGLE_MODAL } = ModalActionTypes;

export const updateProject = (
  formData: IProjectForm,
  id: string,
  imageData: File | null
) => async (dispatch: Dispatch) => {
  const config = { headers: { 'Content-Type': 'application/json' } };

  try {
    if (imageData) {
      dispatch({ type: ProjectActionTypes.UPDATE_PROJECT_REQUEST });
      const headers = { headers: { ContentType: imageData.type } };
      const uploadConfig = await axios.get('/api/uploads');
      await axios.put(uploadConfig.data.url, imageData, headers);

      const body = { ...formData, mainImage: uploadConfig.data.key };
      const { data } = await axios.put(`/api/projects/${id}`, body, config);

      dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: data });
      dispatch({ type: TOGGLE_MODAL, payload: { displayModal: false } });
    } else {
      dispatch({ type: ProjectActionTypes.UPDATE_PROJECT_REQUEST });
      const { data } = await axios.put(`/api/projects/${id}`, formData, config);
      dispatch({ type: UPDATE_PROJECT_SUCCESS, payload: data });
      dispatch({ type: TOGGLE_MODAL, payload: { displayModal: false } });
    }
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: UPDATE_PROJECT_FAILURE, payload: errors });
    return;
  }
};
