import React from 'react';
import { ICartItem } from 'interfaces';
import ReviewOrderItem from './ReviewOrderItem';

interface IProps {
  cartItems: ICartItem[];
}

export const ReviewOrderItems: React.FC<IProps> = ({ cartItems }) => {
  const list = cartItems.map((c) => <ReviewOrderItem key={c._id} c={c} />);
  return (
    <>
      <div className='review-order__section'>
        <h3 className='review-order__title'>Items</h3>
        {list}
      </div>
      <hr className='checkout-item__border'></hr>
    </>
  );
};
