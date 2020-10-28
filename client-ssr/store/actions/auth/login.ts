import { AuthActionTypes } from "../types";
import auth from "api/auth";

interface ILoginFormData {
  email: string;
  password: string;
}

export const login = (formData: ILoginFormData) => async (dispatch) => {
  const config = { headers: { "Content-Type": "application/json" } };
  try {
    dispatch({ type: AuthActionTypes.USER_LOGIN_REQUEST });
    await auth.post("/login", { formData }, config);

    dispatch({ type: AuthActionTypes.USER_LOGIN_SUCCESS });
  } catch (e) {
    const errorResponse = e.response.data.message;
    dispatch({
      type: AuthActionTypes.USER_LOGIN_FAILURE,
      payload: e.response && errorResponse ? errorResponse : e.message,
    });
  }
};
