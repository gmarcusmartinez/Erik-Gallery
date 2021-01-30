import projects from 'api/projects';
import { Dispatch } from 'redux';
import { ProjectActionTypes } from 'state';

export const adminFetchProjects = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ProjectActionTypes.ADMIN_FETCH_PROJECTS_REQUEST });
    const { data } = await projects.put(`/admin`);
    dispatch({
      type: ProjectActionTypes.ADMIN_FETCH_PROJECTS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: ProjectActionTypes.ADMIN_FETCH_PROJECTS_FAILURE,
      payload: errorResponse,
    });
  }
};
