import prints from 'api/prints';
import { Dispatch } from 'redux';
import { PrintActionTypes } from 'state';

export const fetchPrints = (page: Number) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: PrintActionTypes.FETCH_PRINTS_REQUEST });
    const { data } = await prints.get(`/?page=${page}`);
    dispatch({ type: PrintActionTypes.FETCH_PRINTS_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: PrintActionTypes.FETCH_PRINTS_FAILURE,
      payload: errorResponse,
    });
  }
};