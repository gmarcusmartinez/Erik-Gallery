import { LightboxActionTypes } from 'state';

export const toggleLightbox = (bool: boolean, image: string) => ({
  type: LightboxActionTypes.SET_DISPLAY_LIGHTBOX,
  payload: { bool, image },
});
