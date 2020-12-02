import { ICartItem } from "interfaces";
import { AnyAction } from "redux";
import { CartActionTypes } from "store/actions/types";
import { addItemToCart } from "utils";

const initialState = {
  isOpen: false,
  cartItems: [],
  shippingInfo: {},
  paymentMethod: "",
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
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (c: ICartItem) => c._id !== payload._id
        ),
      };
    case CartActionTypes.UPDATE_SHIPPING_INFO:
      return { ...state, shippingInfo: payload };

    case CartActionTypes.UPDATE_PAYMENT_METHOD:
      return { ...state, paymentMethod: payload };

    default:
      return state;
  }
};
