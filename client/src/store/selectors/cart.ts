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

export const selectCartIsEmpty = createSelector(
  [selectCart],
  (cart) => cart.cartItems.length === 0
);

export const selectShippingAddress = createSelector(
  [selectCart],
  (cart) => cart.shippingAddress
);

export const selectPaymentMethod = createSelector(
  [selectCart],
  (cart) => cart.paymentMethod
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((acc: any, curr: any) => acc + curr.quantity, 0)
);

export const selectItemsTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc: any, curr: any) => acc + curr.quantity * curr.netPrice,
    0
  )
);
export const selectCartVAT = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (acc: any, curr: any) => acc + curr.quantity * curr.vatPrice,
    0
  )
);
export const selectCartShipping = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc: any, curr: any) => acc + curr.quantity * curr.shippingPrice,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc: any, curr: any) => acc + curr.quantity * curr.price, 0)
);
