import React from 'react';
import { ICartItem } from 'interfaces';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';
import { useActions } from 'hooks/use-actions';

const CartIcon: React.FC = () => {
  const { toggleCart } = useActions();
  const { isOpen, cartItems } = useTypedSelector((state) => state.cart);
  const itemCount = cartItems.reduce(
    (acc: number, curr: ICartItem) => acc + curr.quantity,
    0
  );
  return (
    <div className='cart-icon' onClick={() => toggleCart(!isOpen)}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
