import axios from 'axios';
import { Dispatch } from 'redux';
import { ModalActionTypes, ProjectActionTypes } from 'state';

const { TOGGLE_MODAL } = ModalActionTypes;
const { ADD_PROJECT_IMG_FAILURE, ADD_PROJECT_IMG_SUCCESS } = ProjectActionTypes;

export const addProjectImage = (id: string, imageData: File | null) => async (
  dispatch: Dispatch
) => {
  if (!imageData) {
    const errors = [{ message: 'Please select an image', field: 'image' }];
    dispatch({ type: ADD_PROJECT_IMG_FAILURE, payload: errors });
    return;
  }

  try {
    dispatch({ type: ProjectActionTypes.ADD_PROJECT_IMG_REQUEST });
    const headers = { headers: { ContentType: imageData.type } };
    const uploadConfig = await axios.get('/api/uploads');
    await axios.put(uploadConfig.data.url, imageData, headers);

    const body = uploadConfig.data.key;
    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await axios.patch(`/api/projects/${id}`, body, config);

    dispatch({ type: ADD_PROJECT_IMG_SUCCESS, payload: data });
    dispatch({ type: TOGGLE_MODAL, payload: { displayModal: false } });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({ type: ADD_PROJECT_IMG_FAILURE, payload: errors });
    return;
  }
};
