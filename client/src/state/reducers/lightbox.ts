import { AnyAction } from 'redux';
import { LightboxActionTypes } from 'state/types';

interface LightboxState {
  display: boolean;
  images: string[];
  index: number;
}
const initialState = {
  display: false,
  images: [],
  index: 0,
};

export const lightbox = (
  state: LightboxState = initialState,
  action: AnyAction
): LightboxState => {
  const { type, payload } = action;

  switch (type) {
    case LightboxActionTypes.SET_DISPLAY_LIGHTBOX:
      return {
        display: payload.bool,
        images: payload.images,
        index: payload.index,
      };
    default:
      return state;
  }
};
