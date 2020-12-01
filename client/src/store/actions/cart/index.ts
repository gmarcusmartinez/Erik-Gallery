import { ICartItem } from "interfaces";
import { CartActionTypes } from "../types";

export const addItemToCart = (item: ICartItem) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const toggleCart = (bool: boolean) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: bool,
});

export const clearItemFromCart = (item: ICartItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
