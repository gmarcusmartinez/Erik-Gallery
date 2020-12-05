import { createSelector } from "reselect";

const selectZines = (state: any) => state.zines;

export const selectAllzines = createSelector([selectZines], (zines) =>
  Object.values(zines.items)
);

export const errors = createSelector([selectZines], (zines) => zines.errors);
export const loading = createSelector([selectZines], (zines) => zines.loading);
export const zinesPages = createSelector([selectZines], (zines) => zines.pages);

export const selectedItem = createSelector(
  [selectZines],
  (zines) => zines.selectedItem
);

export const selectIszinesLoaded = createSelector(
  [selectZines],
  (zines) => !!zines.items
);
