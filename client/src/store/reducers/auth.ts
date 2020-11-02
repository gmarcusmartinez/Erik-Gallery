import { AnyAction } from "redux";
// import { AuthActionTypes } from "../../store/actions/types";

const initialState = {
  loading: false,
  errors: null,
  currentUser: null,
};

export const auth = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    // case AuthActionTypes.USER_LOGIN_REQUEST:
    //   return {
    //     ...state,
    //     loading: true,
    //   };

    // case AuthActionTypes.GET_CURRENT_USER:
    // case AuthActionTypes.USER_LOGIN_SUCCESS:
    // case AuthActionTypes.USER_LOGOUT_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     currentUser: payload,
    //   };
    // case AuthActionTypes.USER_LOGIN_FAILURE:
    //   return {
    //     ...state,
    //     loading: false,
    //     errors: payload,
    //   };

    default:
      return state;
  }
};
