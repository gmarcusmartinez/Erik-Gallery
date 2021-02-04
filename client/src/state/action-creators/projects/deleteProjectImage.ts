import zines from 'api/zines';
import { Dispatch } from 'redux';
import { ProjectActionTypes } from 'state';

export const deleteProjectImage = (id: string, imgStr: string) => async (
  dispatch: Dispatch
) => {
  try {
    dispatch({ type: ProjectActionTypes.DELETE_PROJECT_PAGE_REQUEST });

    const config = { headers: { 'Content-Type': 'application/json' } };
    const { data } = await zines.put(`/${id}/deletePage`, { imgStr }, config);
    dispatch({
      type: ProjectActionTypes.DELETE_PROJECT_PAGE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    const errors = err.response.data.errors || err.message;
    dispatch({
      type: ProjectActionTypes.DELETE_PROJECT_PAGE_FAILURE,
      payload: errors,
    });
  }
};
