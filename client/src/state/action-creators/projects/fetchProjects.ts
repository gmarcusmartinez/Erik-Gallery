import projects from 'api/projects';
import { Dispatch } from 'redux';
import { ProjectActionTypes } from 'state';

const { FETCH_PROJECTS_FAILURE, FETCH_PROJECTS_SUCCESS } = ProjectActionTypes;

export const fetchProjects = (page: Number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ProjectActionTypes.FETCH_PROJECTS_REQUEST });
    const { data } = await projects.get(`/?page=${page}`);
    dispatch({ type: FETCH_PROJECTS_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: FETCH_PROJECTS_FAILURE, payload: errorResponse });
  }
};
