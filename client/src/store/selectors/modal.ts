import { createSelector } from "reselect";

//@ts-ignore
const selectModal = (state) => state.modal;

export const selectModalIsOpen = createSelector(
  [selectModal],
  (modal) => modal.displayModal
);

export const selectModalData = createSelector(
  [selectModal],
  (modal) => modal.data
);
export const selectModalComponent = createSelector(
  [selectModal],
  (modal) => modal.component
);
export const selectDarkMode = createSelector(
  [selectModal],
  (modal) => modal.darkmode
);
