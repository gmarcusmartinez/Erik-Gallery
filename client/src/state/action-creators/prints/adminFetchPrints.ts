import prints from 'api/prints';
import { Dispatch } from 'redux';
import { PrintActionTypes } from 'state';
import { AdminFetchPrintsAction } from 'state/actions/prints';

export const adminFetchPrints = () => async (
  dispatch: Dispatch<AdminFetchPrintsAction>
) => {
  try {
    dispatch({ type: PrintActionTypes.ADMIN_FETCH_PRINTS_REQUEST });
    const { data } = await prints.put(`/admin`);
    dispatch({
      type: PrintActionTypes.ADMIN_FETCH_PRINTS_SUCCESS,
      payload: data,
    });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: PrintActionTypes.ADMIN_FETCH_PRINTS_FAILURE,
      payload: errorResponse,
    });
  }
};
