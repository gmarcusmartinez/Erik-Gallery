import { AnyAction } from "redux";
import { ModalActionTypes } from "../actions/types";

const initialState = {
  displayModal: false,
  component: null,
  data: null,
  darkmode: false,
};

export const modal = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ModalActionTypes.TOGGLE_MODAL:
      return {
        displayModal: payload.bool,
        component: payload.component,
        data: payload.data,
        darkmode: payload.darkmode,
      };
    default:
      return state;
  }
};
