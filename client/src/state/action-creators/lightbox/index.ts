import { LightboxActionTypes } from 'state';

export const toggleLightbox = (
  bool: boolean,
  images: string[],
  index: number
) => ({
  type: LightboxActionTypes.SET_DISPLAY_LIGHTBOX,
  payload: { bool, images, index },
});
