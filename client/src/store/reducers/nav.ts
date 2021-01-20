import { AnyAction } from 'redux';
import { NavActionTypes } from '../actions/types';

interface NavState {
  isOpen: boolean;
}

const initialState = {
  isOpen: false,
};

export const nav = (
  state: NavState = initialState,
  action: AnyAction
): NavState => {
  const { type, payload } = action;

  switch (type) {
    case NavActionTypes.TOGGLE_NAV:
      return { isOpen: payload };

    default:
      return state;
  }
};
