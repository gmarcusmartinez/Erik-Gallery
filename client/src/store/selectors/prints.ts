import { createSelector } from "reselect";

const selectPrints = (state: any) => state.prints;

export const selectAllPrints = createSelector(
  [selectPrints],
  (prints) => prints.items
);

export const selectIsPrintsLoading = createSelector(
  [selectPrints],
  (prints) => prints.loading
);

export const selectIsPrintsLoaded = createSelector(
  [selectPrints],
  (prints) => !!prints.items
);
