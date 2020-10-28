import { NavActionTypes } from "../actions/types";

const initialState = {
  isOpen: false,
};

export const nav = (state = initialState, action) => {
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
