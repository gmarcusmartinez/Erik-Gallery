import { createSelector } from "reselect";

const selectPrints = (state: any) => state.prints;

export const selectAllPrints = createSelector([selectPrints], (prints) =>
  Object.values(prints.items)
);
export const errors = createSelector([selectPrints], (prints) => prints.errors);

export const loading = createSelector(
  [selectPrints],
  (prints) => prints.loading
);

export const selectedItem = createSelector(
  [selectPrints],
  (prints) => prints.selectedItem
);

export const selectIsPrintsLoaded = createSelector(
  [selectPrints],
  (prints) => !!prints.items
);
