import { ICartItem } from 'interfaces';

export const calculateTotal = (cartItems: ICartItem[]) =>
  cartItems.reduce(
    (acc: number, curr: ICartItem) => acc + curr.quantity * curr.price,
    0
  );
