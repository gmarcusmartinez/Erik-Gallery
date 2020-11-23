import { AnyAction } from "redux";
import { LightboxActionTypes } from "../actions/types";

const initialState = {
  display: false,
  image: null,
};

export const lightbox = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case LightboxActionTypes.SET_DISPLAY_LIGHTBOX:
      return { display: payload.bool, image: payload.image };
    default:
      return state;
  }
};
