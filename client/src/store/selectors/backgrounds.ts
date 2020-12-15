import { IBackground } from "interfaces";
import { createSelector } from "reselect";

//@ts-ignore
const selectBackgrounds = (state) => state.backgrounds;

export const errors = createSelector(
  [selectBackgrounds],
  (backgrounds) => backgrounds.errors
);

export const loading = createSelector(
  [selectBackgrounds],
  (backgrounds) => backgrounds.loading
);

export const activeBackground = createSelector(
  [selectBackgrounds],
  (backgrounds) =>
    backgrounds.items.find((item: IBackground) => item.active === true)
);
