import { createSelector } from "reselect";

//@ts-ignore
const selectOrders = (state) => state.orders;

export const selectOrder = createSelector(
  [selectOrders],
  (orders) => orders.selectedItem
);
