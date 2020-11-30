import { AnyAction } from "redux";
import { CartActionTypes } from "store/actions/types";
import { addItemToCart } from "utils";

const initialState = {
  isOpen: false,
  cartItems: [],
};

export const cart = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, isOpen: payload };

    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      };
    default:
      return state;
  }
};
