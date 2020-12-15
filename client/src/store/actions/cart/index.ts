import { ICartItem, IShippingAddress } from "interfaces";
import { Dispatch } from "redux";
import { CartActionTypes, ModalActionTypes } from "../types";

export const addItemToCart = (item: ICartItem) => (dispatch: Dispatch) => {
  const modalPayload = { displayModal: false, component: "", data: null };
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

export const updateShippingAddress = (data: IShippingAddress) => ({
  type: CartActionTypes.UPDATE_SHIPPING_ADDRESS,
  payload: data,
});

export const updatePaymentMethod = (data: string) => ({
  type: CartActionTypes.UPDATE_PAYMENT_METHOD,
  payload: data,
});

const emptyCart = {
  isOpen: false,
  cartItems: [],
  shippingAddress: {
    email: "",
    name: "",
    address: "",
    country: "",
    city: "",
    postalCode: "",
  },
  paymentMethod: "",
};

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
  payload: emptyCart,
});
