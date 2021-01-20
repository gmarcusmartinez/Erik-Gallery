import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { ReactComponent as ShoppingIcon } from 'assets/shopping-bag.svg';
import { useActions } from 'hooks/use-actions';
import { cartQuantity } from 'utils/cart/calculate-quantity';

const CartIcon: React.FC = () => {
  const { toggleCart } = useActions();
  const { isOpen, cartItems } = useTypedSelector(({ cart }) => cart);
  const itemCount = cartQuantity(cartItems);

  return (
    <div className='cart-icon' onClick={() => toggleCart(!isOpen)}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

export default CartIcon;
