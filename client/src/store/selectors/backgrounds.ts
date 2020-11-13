import { createSelector } from "reselect";

const selectBackgrounds = (state: any) => state.backgrounds;

export const errors = createSelector(
  [selectBackgrounds],
  (backgrounds) => backgrounds.errors
);

export const loading = createSelector(
  [selectBackgrounds],
  (backgrounds) => backgrounds.loading
);
