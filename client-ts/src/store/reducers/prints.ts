import { AnyAction } from "redux";
import { PrintActionTypes } from "store/actions/types";

const initialState = {
  loading: true,
  items: [],
};

export const prints = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case PrintActionTypes.FETCH_PRINTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PrintActionTypes.FETCH_PRINTS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: payload,
      };
    default:
      return state;
  }
};
