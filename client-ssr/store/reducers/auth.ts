import { AnyAction } from "redux";
import { AuthActionTypes } from "store/actions/types";

const initialState = {
  loading: false,
  isAuthenticated: false,
  errors: null,
};

export const auth = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case AuthActionTypes.USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case AuthActionTypes.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
      };
    case AuthActionTypes.USER_LOGOUT:
    case AuthActionTypes.USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
};
