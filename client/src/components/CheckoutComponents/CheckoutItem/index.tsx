import React from 'react';
import { s3Url } from 'api/url';
import { ICartItem } from 'interfaces';
import { useActions } from 'hooks/use-actions';

interface IProps {
  item: ICartItem;
}
const CheckoutItem: React.FC<IProps> = ({ item }) => {
  const { quantity, price, mainImage, description, title } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;
  const text = description ? description : title;
  const totalItemPrice = quantity * price;
  const handleClearItem = () => clearItemFromCart(item);
  const { clearItemFromCart } = useActions();

  return (
    <div className='checkout-item'>
      <div className='checkout-item__img' style={{ backgroundImage }} />
      <div className='checkout-item__text'>{text}</div>
      <div className='checkout-item__total'>
        <span>{+price}&#8364;</span>
        <span>&times;</span>
        <span>{quantity}</span>
        <span>&#61;</span>
        <span>{totalItemPrice}&#8364;</span>
      </div>
      <div className='checkout-item__delete' onClick={handleClearItem}>
        &times;
      </div>
    </div>
  );
};

export default CheckoutItem;
