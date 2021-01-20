import { AnyAction } from 'redux';
import { LightboxActionTypes } from '../actions/types';

interface LightboxState {
  display: boolean;
  backgroundImage: string;
}
const initialState = {
  display: false,
  backgroundImage: '',
};

export const lightbox = (
  state: LightboxState = initialState,
  action: AnyAction
): LightboxState => {
  const { type, payload } = action;

  switch (type) {
    case LightboxActionTypes.SET_DISPLAY_LIGHTBOX:
      return { display: payload.bool, backgroundImage: payload.image };
    default:
      return state;
  }
};
