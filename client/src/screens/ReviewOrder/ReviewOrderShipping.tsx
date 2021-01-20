import React from 'react';
import { IShippingAddress } from 'interfaces';

interface IProps {
  shippingAddress?: IShippingAddress;
}
export const ReviewOrderShipping: React.FC<IProps> = ({ shippingAddress }) => {
  return (
    <>
      <div className='review-order__shipping'>
        <h3 className='review-order__title'>Shipping Address</h3>
        <span>{shippingAddress!.name}</span>
        <span>{shippingAddress!.address}</span>
        <span>{shippingAddress!.city}</span>
        <span>{shippingAddress!.postalCode}</span>
        <span>{shippingAddress!.country}</span>
      </div>
      <hr className='checkout-item__border'></hr>
    </>
  );
};
