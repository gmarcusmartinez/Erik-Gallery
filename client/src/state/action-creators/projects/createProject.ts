import axios from 'axios';
import { IProjectForm } from 'interfaces/forms';
import { Dispatch } from 'redux';
import { ModalActionTypes, ProjectActionTypes } from 'state';

const { TOGGLE_MODAL } = ModalActionTypes;
const { CREATE_PROJECT_FAILURE, CREATE_PROJECT_SUCCESS } = ProjectActionTypes;

export const createProject = (
  formData: IProjectForm,
  imageData: File | null
) => async (dispatch: Dispatch) => {
  if (!imageData) {
    const errors = [{ message: 'Please select an image', field: 'image' }];
    dispatch({ type: CREATE_PROJECT_FAILURE, payload: errors });
    return;
  }

  try {
    dispatch({ type: ProjectActionTypes.CREATE_PROJECT_REQUEST });
    const uploadConfig = await axios.get('/api/uploads');
    const headers = { headers: { ContentType: imageData.type } };
    await axios.put(uploadConfig.data.url, imageData, headers);

    const config = { headers: { 'Content-Type': 'application/json' } };
    const requestBody = { ...formData, mainImage: uploadConfig.data.key };
    const { data } = await axios.post('/api/projects', requestBody, config);

    dispatch({ type: CREATE_PROJECT_SUCCESS, payload: data });
    dispatch({ type: TOGGLE_MODAL, payload: { displayModal: false } });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: CREATE_PROJECT_FAILURE, payload: errors });
    return;
  }
};
