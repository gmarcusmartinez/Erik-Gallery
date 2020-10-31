import { AuthActionTypes } from "../types";
import auth from "api/auth";
import Router from "next/router";

interface ILoginFormData {
  email: string;
  password: string;
}

export const login = (formData: ILoginFormData) => async (dispatch) => {
  const config = { headers: { "Content-Type": "application/json" } };
  try {
    dispatch({ type: AuthActionTypes.USER_LOGIN_REQUEST });
    await auth.post("/login", formData, config);

    dispatch({ type: AuthActionTypes.USER_LOGIN_SUCCESS });
    Router.push("/admin/dashboard");
  } catch (e) {
    const errorResponse = e.response.data.errors;
    dispatch({
      type: AuthActionTypes.USER_LOGIN_FAILURE,
      payload: errorResponse,
    });
  }
};
