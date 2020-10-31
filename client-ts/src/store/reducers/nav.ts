import { AnyAction } from "redux";
import { NavActionTypes } from "../actions/types";

const initialState = {
  isOpen: false,
};

export const nav = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case NavActionTypes.TOGGLE_NAV:
      return {
        isOpen: payload,
      };
    default:
      return state;
  }
};
