import { AnyAction } from "redux";
import { NavActionTypes } from "store/actions/types";

const initialState = {
  open: false,
};

export const nav = (state = initialState, action: AnyAction) => {
  const { type } = action;

  switch (type) {
    case NavActionTypes.TOGGLE_NAV_OPEN:
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
};
