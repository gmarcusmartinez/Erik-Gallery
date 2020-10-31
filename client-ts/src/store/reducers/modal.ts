import { AnyAction } from "redux";
import { ModalActionTypes } from "../actions/types";

const initialState = {
  bool: false,
  component: null,
  id: "",
};

export const modal = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ModalActionTypes.TOGGLE_MODAL:
      return {
        displayModal: payload.bool,
        component: payload.component,
        id: payload.id,
      };
    default:
      return state;
  }
};
