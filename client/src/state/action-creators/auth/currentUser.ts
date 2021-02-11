import auth from 'api/auth';
import { IAdmin } from 'interfaces';
import { Dispatch } from 'redux';
import { AuthActionTypes } from 'state';

export interface GetCurrentUserAction {
  type: AuthActionTypes.GET_CURRENT_USER;
  payload: IAdmin | null;
}

export const getCurrentUser = () => async (dispatch: Dispatch) => {
  const { data } = await auth.get('/currentUser');
  dispatch({ type: AuthActionTypes.GET_CURRENT_USER, payload: data });
};
