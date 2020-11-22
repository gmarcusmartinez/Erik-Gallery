import { AnyAction } from "redux";
import { PageActionTypes } from "../actions/types";

const initialState = {};

export const page = (state = initialState, action: AnyAction) => {
  const { type } = action;
  switch (type) {
    case PageActionTypes.SCROLL_TO_TOP:
      return { ...state };
    default:
      return state;
  }
};
