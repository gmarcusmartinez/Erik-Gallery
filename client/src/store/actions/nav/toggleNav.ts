import { NavActionTypes, CartActionTypes } from "store/actions/types";

export const toggleNav = (bool: boolean) => (dispatch: any) => {
  dispatch({
    type: NavActionTypes.TOGGLE_NAV,
    payload: bool,
  });
  dispatch({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
    payload: false,
  });
};
