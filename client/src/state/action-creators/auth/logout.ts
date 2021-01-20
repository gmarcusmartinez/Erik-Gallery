import auth from 'api/auth';
import history from 'core/history';
import { Dispatch } from 'redux';
import { AuthActionTypes } from 'state';

const { USER_LOGOUT_FAILURE, USER_LOGOUT_SUCCESS } = AuthActionTypes;

export const logout = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: AuthActionTypes.USER_LOGOUT_REQUEST });
    const { data } = await auth.post('/logout');
    dispatch({ type: USER_LOGOUT_SUCCESS, payload: data });
    history.push('/');
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({ type: USER_LOGOUT_FAILURE, payload: errorResponse });
  }
};
