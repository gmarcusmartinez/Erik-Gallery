import auth from "api/auth";
import { AuthActionTypes } from "store/actions/types";

export interface GetCurrentUserAction {
  type: AuthActionTypes.GET_CURRENT_USER;
  payload: any;
}

export const getCurrentUser = () => async (dispatch: any) => {
  const { data } = await auth.get("/currentUser");
  dispatch({ type: AuthActionTypes.GET_CURRENT_USER, payload: data });
};
