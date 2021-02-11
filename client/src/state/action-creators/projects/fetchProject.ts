import projects from 'api/projects';
import { Dispatch } from 'redux';
import { ProjectActionTypes } from 'state/types';

export const fetchProject = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ProjectActionTypes.FETCH_PROJECT_REQUEST });
    const { data } = await projects.get(`/${id}`);
    dispatch({ type: ProjectActionTypes.FETCH_PROJECT_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: ProjectActionTypes.FETCH_PROJECT_FAILURE,
      payload: errorResponse,
    });
  }
};
