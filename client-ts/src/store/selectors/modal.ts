import { createSelector } from "reselect";

const selectModal = (state: any) => state.modal;

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
