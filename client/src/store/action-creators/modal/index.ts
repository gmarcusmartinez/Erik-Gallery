import { Dispatch } from 'redux';
import { ModalActionTypes } from 'store/actions/types';

export const toggleModal = (
  bool: boolean,
  component: string,
  data?: any,
  darkmode?: boolean
) => (dispatch: Dispatch) => {
  dispatch({
    type: ModalActionTypes.TOGGLE_MODAL,
    payload: { bool, component, data, darkmode },
  });
};
