import { ModalActionTypes } from '../types';

export interface ToggleModalAction {
  type: ModalActionTypes.TOGGLE_MODAL;
  payload: { displayModal: boolean; component?: string; data?: any };
}

export type ModalAction = ToggleModalAction;
