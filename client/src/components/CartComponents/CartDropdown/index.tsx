import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from 'components/CartComponents/CartItem';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

const CartDropDown: React.FC = () => {
  const { closeAll } = useActions();
  const handleClick = () => closeAll();
  const { cartItems } = useTypedSelector((state) => state.cart);
  const list = cartItems.map((c, i) => <CartItem key={i} item={c} />);
  const emptyMsg = <span className='empty-message'>Your cart is empty</span>;

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>{cartItems.length ? list : emptyMsg}</div>
      <Link to='/checkout' className='cart-dropdown__btn' onClick={handleClick}>
        Go To Cart
      </Link>
    </div>
  );
};

export default CartDropDown;
