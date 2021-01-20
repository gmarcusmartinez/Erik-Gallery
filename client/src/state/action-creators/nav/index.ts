import { Dispatch } from 'redux';
import { NavActionTypes, CartActionTypes } from 'state';

export const toggleNav = (bool: boolean) => (dispatch: Dispatch) => {
  dispatch({
    type: NavActionTypes.TOGGLE_NAV,
    payload: bool,
  });
  dispatch({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: false,
  });
};