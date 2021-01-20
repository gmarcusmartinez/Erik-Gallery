import { ICartItem } from 'interfaces';

export const calculateItemsTotal = (cartItems: ICartItem[]) =>
  cartItems.reduce(
    (acc: number, curr: ICartItem) => acc + curr.quantity * curr.netPrice,
    0
  );
