import { AnyAction } from "redux";
import { PrintActionTypes } from "store/actions/types";

const initialState = {
  loading: true,
  prints: [],
};

export const prints = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case PrintActionTypes.FETCH_PRINTS_START:
      return {
        ...state,
        loading: true,
      };
    case PrintActionTypes.FETCH_PRINTS_SUCCESS:
      return {
        ...state,
        loading: false,
        prints: payload,
      };
    default:
      return state;
  }
};
