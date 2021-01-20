import { ICartItem } from 'interfaces';

export const calculateVat = (cartItems: ICartItem[]) =>
  cartItems.reduce(
    (acc: number, curr: ICartItem) => acc + curr.quantity * curr.vatPrice,
    0
  );
