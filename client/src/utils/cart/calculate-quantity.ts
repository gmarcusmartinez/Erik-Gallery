import { ICartItem } from 'interfaces';

export const cartQuantity = (cartItems: ICartItem[]) =>
  cartItems.reduce((acc: number, curr: ICartItem) => acc + curr.quantity, 0);
