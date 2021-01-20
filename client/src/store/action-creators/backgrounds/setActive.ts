import backgrounds from 'api/backgrounds';
import { Dispatch } from 'redux';
import { BackgroundActionTypes } from 'store/actions/types';

const { SET_ACTIVE_SUCCESS, SET_ACTIVE_FAILURE } = BackgroundActionTypes;

export const setActive = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: BackgroundActionTypes.SET_ACTIVE_REQUEST });
    const { data } = await backgrounds.put(`/${id}`);
    dispatch({ type: SET_ACTIVE_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: SET_ACTIVE_FAILURE, payload: errorResponse });
  }
};
