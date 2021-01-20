import auth from 'api/auth';
import history from 'core/history';
import { Dispatch } from 'redux';
import { AuthActionTypes } from 'state';

interface ILoginFormData {
  email: string;
  password: string;
}

export const login = (formData: ILoginFormData) => async (
  dispatch: Dispatch
) => {
  const config = { headers: { 'Content-Type': 'application/json' } };
  try {
    dispatch({ type: AuthActionTypes.USER_LOGIN_REQUEST });
    const { data } = await auth.post('/login', formData, config);

    dispatch({ type: AuthActionTypes.USER_LOGIN_SUCCESS });
    dispatch({ type: AuthActionTypes.GET_CURRENT_USER, payload: data });
    history.push('/dashboard');
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: AuthActionTypes.USER_LOGIN_FAILURE,
      payload: errorResponse,
    });
  }
};
