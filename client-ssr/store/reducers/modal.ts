import { TOGGLE_MODAL } from "../actions/types";

const initialState = {
  displayModal: false,
};

export const modal = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case TOGGLE_MODAL:
      return {
        displayModal: payload,
      };
    default:
      return state;
  }
};
