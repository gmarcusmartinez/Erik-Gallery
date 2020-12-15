import { createSelector } from "reselect";

//@ts-ignore
const selectLighbox = (state) => state.lightbox;

export const selectLightboxlIsOpen = createSelector(
  [selectLighbox],
  (lightbox) => lightbox.display
);
export const selectImage = createSelector(
  [selectLighbox],
  (lightbox) => lightbox.image
);
