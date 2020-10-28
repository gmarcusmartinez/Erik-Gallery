import { NavActionTypes } from "store/actions/types";

export const toggleNav = (bool) => (dispatch) => {
  dispatch({
    type: NavActionTypes.TOGGLE_NAV,
    payload: bool,
  });
};
