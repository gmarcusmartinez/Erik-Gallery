import { createSelector } from "reselect";

//@ts-ignore
const selectZines = (state) => state.zines;

export const selectAllZines = createSelector(
  [selectZines],
  (zines) => zines.items
);

export const errors = createSelector([selectZines], (zines) => zines.errors);
export const loading = createSelector([selectZines], (zines) => zines.loading);
export const zinesPages = createSelector([selectZines], (zines) => zines.pages);

export const selectedItem = createSelector(
  [selectZines],
  (zines) => zines.selectedItem
);

export const selectIsZinesLoaded = createSelector(
  [selectZines],
  (zines) => !!zines.items
);
