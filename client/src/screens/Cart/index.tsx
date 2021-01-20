import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from 'hooks/use-typed-selector';
import CheckoutItem from 'components/CheckoutComponents/CheckoutItem';
import { calculateTotal } from 'utils';

const CartScreen: React.FC = () => {
  const { cartItems } = useTypedSelector((state) => state.cart);
  const total = calculateTotal(cartItems);
  const list = cartItems.map((c, i) => <CheckoutItem item={c} key={i} />);
  const history = useHistory();
  const handleClick = () => history.push('/shipping');

  return (
    <div className='cart'>
      <div className='cart__title'>Shopping Cart</div>
      <hr className='dash-item__border' style={{ display: 'block' }} />
      <div className='cart__details'>
        <div className='cart__list'>{list}</div>
        <div className='cart__total'>
          <span>total: {total}&#8364;</span>
        </div>
        {!!cartItems.length && (
          <div className='cart__btn' onClick={handleClick}>
            Proceed to Checkout
          </div>
        )}
      </div>
    </div>
  );
};
export default CartScreen;
