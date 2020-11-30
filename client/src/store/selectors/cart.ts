import { createSelector } from "reselect";

const selectCart = (state: any) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartIsOpen = createSelector(
  [selectCart],
  (cart) => cart.isOpen
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc: any, curr: any) => acc + curr.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc: any, curr: any) => acc + curr.quantity * curr.price, 0)
);
