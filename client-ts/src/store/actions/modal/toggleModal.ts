import { Dispatch } from "redux";
import { ModalActionTypes } from "../types";

export const toggleModal = (bool: boolean, component: string, id?: string) => (
  dispatch: Dispatch
) => {
  dispatch({
    type: ModalActionTypes.TOGGLE_MODAL,
    payload: { bool, component, id },
  });
};
