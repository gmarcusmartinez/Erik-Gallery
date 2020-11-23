import { LightboxActionTypes } from "store/actions/types";

export const toggleLightbox = (bool: boolean, image: string) => (
  dispatch: any
) => {
  dispatch({
    type: LightboxActionTypes.SET_DISPLAY_LIGHTBOX,
    payload: { bool, image },
  });
};
