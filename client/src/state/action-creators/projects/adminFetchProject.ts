import projects from 'api/projects';
import { Dispatch } from 'redux';
import { ProjectActionTypes } from 'state';

export const adminFetchProject = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ProjectActionTypes.ADMIN_FETCH_PROJECT_REQUEST });
    const { data } = await projects.put(`/${id}/admin`);
    dispatch({
      type: ProjectActionTypes.ADMIN_FETCH_PROJECT_SUCCESS,
      payload: data,
    });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: ProjectActionTypes.ADMIN_FETCH_PROJECT_FAILURE,
      payload: errorResponse,
    });
  }
};
