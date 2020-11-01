import auth from "../../../api/auth";
import { AuthActionTypes } from "../types";

export const logout = () => async (dispatch: any) => {
  try {
    dispatch({ type: AuthActionTypes.USER_LOGOUT_REQUEST });
    const { data } = await auth.post("/signout");

    dispatch({ type: AuthActionTypes.USER_LOGOUT_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: AuthActionTypes.USER_LOGOUT_FAILURE,
      payload: errorResponse,
    });
  }
};
