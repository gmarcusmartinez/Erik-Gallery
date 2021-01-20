import React from 'react';
import { ICartItem } from 'interfaces';
import { s3Url } from 'api/url';

interface IProps {
  item: ICartItem;
}

const CartItem: React.FC<IProps> = ({ item }) => {
  const { mainImage, price, quantity, description, title } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;
  const text = description ? description : title;

  return (
    <div className='cart-item'>
      <div className='cart-item__img' style={{ backgroundImage }} />
      <div className='cart-item__text'>{text}</div>
      <div className='cart-item__total'>
        <span>{+price}</span>
        <span>&#8364;</span>
        <span>&times;</span>
        <span>{quantity}</span>
      </div>
    </div>
  );
};

export default CartItem;
