import { createSelector } from "reselect";

//@ts-ignore
const selectPrints = (state) => state.prints;

export const selectAllPrints = createSelector(
  [selectPrints],
  (prints) => prints.items
);
export const errors = createSelector([selectPrints], (prints) => prints.errors);

export const loading = createSelector(
  [selectPrints],
  (prints) => prints.loading
);
export const printsPages = createSelector(
  [selectPrints],
  (prints) => prints.pages
);

export const selectedItem = createSelector(
  [selectPrints],
  (prints) => prints.selectedItem
);

export const selectIsPrintsLoaded = createSelector(
  [selectPrints],
  (prints) => !!prints.items
);
