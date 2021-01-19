import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from 'store/selectors/cart';
import { ICartItem } from 'interfaces';
import CheckoutItem from 'components/CheckoutComponents/CheckoutItem';

interface IProps {
  cartItems: ICartItem[];
  total: number;
}

const CartScreen: React.FC<IProps> = ({ cartItems, total }) => {
  const list = cartItems.map((c, i) => <CheckoutItem item={c} key={i} />);

  const history = useHistory();
  const handleClick = () => history.push('/shipping');

  return (
    <div className='cart'>
      <div className='cart__title'>Shopping Cart</div>
      <hr className='dash-item__border' style={{ display: 'block' }}></hr>

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
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps, {})(CartScreen);
