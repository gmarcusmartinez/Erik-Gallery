import zines from 'api/zines';
import { Dispatch } from 'redux';
import { ZineActionTypes } from 'state';

export const fetchZine = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ZineActionTypes.FETCH_ZINE_REQUEST });
    const { data } = await zines.get(`/${id}`);
    dispatch({ type: ZineActionTypes.FETCH_ZINE_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;

    dispatch({
      type: ZineActionTypes.FETCH_ZINE_FAILURE,
      payload: errorResponse,
    });
  }
};
