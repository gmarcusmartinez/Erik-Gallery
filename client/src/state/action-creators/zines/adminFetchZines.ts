import zines from 'api/zines';
import { Dispatch } from 'redux';
import { ZineActionTypes } from 'state';

const {
  ADMIN_FETCH_ZINES_REQUEST,
  ADMIN_FETCH_ZINES_SUCCESS,
  ADMIN_FETCH_ZINES_FAILURE,
} = ZineActionTypes;

export const adminFetchZines = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ADMIN_FETCH_ZINES_REQUEST });
    const { data } = await zines.put(`/admin`);
    dispatch({ type: ADMIN_FETCH_ZINES_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: ADMIN_FETCH_ZINES_FAILURE, payload: errorResponse });
  }
};
