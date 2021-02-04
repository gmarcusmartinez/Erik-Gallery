import projects from 'api/projects';
import { Dispatch } from 'redux';
import { ProjectActionTypes } from 'state';

const { DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE } = ProjectActionTypes;

export const deleteProject = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ProjectActionTypes.DELETE_PROJECT_REQUEST });
    await projects.delete(`/${id}`);

    dispatch({ type: DELETE_PROJECT_SUCCESS, payload: id });
  } catch (e) {
    const errorResponse = e;
    dispatch({ type: DELETE_PROJECT_FAILURE, payload: errorResponse });
  }
};
