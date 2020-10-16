import { AnyAction } from "redux";
import { CartActionTypes } from "store/actions/types";

const initialState = {
  cartItems: [],
};

export const cart = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    default:
      return state;
  }
};
