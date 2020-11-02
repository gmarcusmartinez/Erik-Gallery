import { AnyAction } from "redux";
// import { CartActionTypes } from "../../store/actions/types";
// import { addItemToCart } from "../../utils";

const initialState = {
  hidden: true,
  cartItems: [],
};

export const cart = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    // case CartActionTypes.TOGGLE_CART_HIDDEN:
    //   return {
    //     ...state,
    //     hidden: !state.hidden,
    //   };
    // case CartActionTypes.ADD_ITEM_TO_CART:
    //   return {
    //     ...state,
    //     cartItems: addItemToCart(state.cartItems, payload),
    //   };
    default:
      return state;
  }
};
