import prints from 'api/prints';
import { Dispatch } from 'redux';
import { PrintActionTypes } from 'store/actions/types';

export const fetchPrint = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PrintActionTypes.FETCH_PRINT_REQUEST });
    const { data } = await prints.get(`/${id}`);
    dispatch({ type: PrintActionTypes.FETCH_PRINT_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;

    dispatch({
      type: PrintActionTypes.FETCH_PRINT_FAILURE,
      payload: errorResponse,
    });
  }
};
