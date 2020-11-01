import { ICartItem } from "../../../interfaces";
import { CartActionTypes } from "../types";

export const addItem = (item: ICartItem) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
