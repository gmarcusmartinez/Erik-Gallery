import projects from 'api/projects';
import { Dispatch } from 'redux';
import { ProjectActionTypes } from 'state';

export const saveImageOrder = (id: string, images: string[]) => async (
  dispatch: Dispatch
) => {
  const config = { headers: { 'Content-Type': 'application/json' } };

  try {
    dispatch({ type: ProjectActionTypes.SAVE_IMAGE_ORDER_REQUEST });
    const { data } = await projects.put(
      `/${id}/updateProjectImages`,
      images,
      config
    );
    dispatch({
      type: ProjectActionTypes.SAVE_IMAGE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: ProjectActionTypes.SAVE_IMAGE_ORDER_FAILURE,
      payload: errorResponse,
    });
  }
};
