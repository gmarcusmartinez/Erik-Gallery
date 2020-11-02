import auth from "api/auth";
import { AuthActionTypes } from "../types";

interface ILoginFormData {
  email: string;
  password: string;
}

export const login = (formData: ILoginFormData) => async (dispatch: any) => {
  const config = { headers: { "Content-Type": "application/json" } };
  try {
    dispatch({ type: AuthActionTypes.USER_LOGIN_REQUEST });
    const { data } = await auth.post("/login", formData, config);

    dispatch({ type: AuthActionTypes.USER_LOGIN_SUCCESS, payload: data });
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: AuthActionTypes.USER_LOGIN_FAILURE,
      payload: errorResponse,
    });
  }
};
