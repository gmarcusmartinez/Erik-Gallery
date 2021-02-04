import { ICartItem } from 'interfaces';
import { Dispatch } from 'redux';
import { CartActionTypes, ModalActionTypes, NavActionTypes } from 'state';

export const addItemToCart = (item: ICartItem) => (dispatch: Dispatch) => {
  const modalPayload = { displayModal: false, component: '', data: null };
  const cartPayload = { bool: true };
  dispatch({ type: CartActionTypes.ADD_ITEM_TO_CART, payload: item });
  dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: modalPayload });
  dispatch({ type: CartActionTypes.TOGGLE_CART_HIDDEN, payload: cartPayload });
};

export const toggleCart = (bool: boolean) => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
  payload: bool,
});

export const clearItemFromCart = (item: ICartItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const updatePaymentMethod = (data: string) => ({
  type: CartActionTypes.UPDATE_PAYMENT_METHOD,
  payload: data,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});

export const closeAll = () => (dispatch: Dispatch) => {
  const modalPayload = { displayModal: false, component: '', data: null };
  dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: modalPayload });
  dispatch({ type: NavActionTypes.TOGGLE_NAV, payload: false });
  dispatch({ type: CartActionTypes.TOGGLE_CART_HIDDEN, payload: false });
};
