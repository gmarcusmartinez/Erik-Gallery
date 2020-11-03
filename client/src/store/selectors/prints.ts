import { createSelector } from "reselect";

const selectPrints = (state: any) => state.prints;

export const selectAllPrints = createSelector([selectPrints], (prints) =>
  Object.values(prints.items)
);

export const printLoading = createSelector(
  [selectPrints],
  (prints) => prints.loading
);

export const printErrors = createSelector(
  [selectPrints],
  (prints) => prints.errors
);

export const selectIsPrintsLoaded = createSelector(
  [selectPrints],
  (prints) => !!prints.items
);
