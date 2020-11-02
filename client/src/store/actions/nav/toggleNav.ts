import { NavActionTypes } from "../../../store/actions/types";

export const toggleNav = (bool: boolean) => (dispatch: any) => {
  dispatch({
    type: NavActionTypes.TOGGLE_NAV,
    payload: bool,
  });
};
