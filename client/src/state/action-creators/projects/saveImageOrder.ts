import projects from 'api/projects';
import { Dispatch } from 'redux';
import { ProjectActionTypes } from 'state';

const { UPDATE_IMAGES_FAILURE, UPDATE_IMAGES_SUCCESS } = ProjectActionTypes;

export const saveImageOrder = (id: string, images: string[]) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: ProjectActionTypes.UPDATE_IMAGES_REQUEST });
    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await projects.put(`/${id}/updateImages`, images, config);
    dispatch({ type: UPDATE_IMAGES_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: UPDATE_IMAGES_FAILURE, payload: errorResponse });
  }
};
