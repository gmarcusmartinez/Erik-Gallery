import { AnyAction } from 'redux';
import { ModalActionTypes } from 'store/actions/types';
import { IProduct, IBackground } from 'interfaces';

interface ModalState {
  displayModal: boolean;
  component: string;
  data: IProduct | IBackground;
  darkmode?: boolean;
}

const initialState = {
  displayModal: false,
  component: '',
  data: null,
  darkmode: false,
};

export const modal = (state = initialState, action: AnyAction) => {
  const { type, payload } = action;
  switch (type) {
    case ModalActionTypes.TOGGLE_MODAL:
      return {
        displayModal: payload.bool,
        component: payload.component,
        data: payload.data,
        darkmode: payload.darkmode,
      };
    default:
      return state;
  }
};
