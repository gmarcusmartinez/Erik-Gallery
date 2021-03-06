import { Dispatch } from 'redux';
import { NavActionTypes, ModalActionTypes } from 'state';

export const toggleNav = (bool: boolean) => (dispatch: Dispatch) => {
  dispatch({ type: NavActionTypes.TOGGLE_NAV, payload: bool });
};

export const closeAll = () => (dispatch: Dispatch) => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  const modalPayload = { displayModal: false, component: '', data: null };
  dispatch({ type: ModalActionTypes.TOGGLE_MODAL, payload: modalPayload });
  dispatch({ type: NavActionTypes.TOGGLE_NAV, payload: false });
};
