import { ICartItem } from "interfaces";
import { CartActionTypes, ModalActionTypes } from "../types";

export const addItemToCart = (item: ICartItem) => async (dispatch: any) => {
  dispatch({ type: CartActionTypes.ADD_ITEM_TO_CART, payload: item });
  dispatch({
    type: ModalActionTypes.TOGGLE_MODAL,
    payload: { displayModal: false, component: "", data: null },
  });
  dispatch({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: { bool: true },
  });
};

export const toggleCart = (bool: boolean) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: bool,
});

export const clearItemFromCart = (item: ICartItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});
