import { createSelector } from "reselect";

const selectLighbox = (state: any) => state.lightbox;

export const selectLightboxlIsOpen = createSelector(
  [selectLighbox],
  (lightbox) => lightbox.display
);
export const selectImage = createSelector(
  [selectLighbox],
  (lightbox) => lightbox.image
);
