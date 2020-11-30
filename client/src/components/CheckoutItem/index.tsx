import React from "react";
import { ICartItem } from "interfaces";

interface IProps {
  item: ICartItem;
}
const CheckoutItem: React.FC<IProps> = ({ item }) => {
  const { quantity, price, mainImage } = item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  return (
    <div className="checkout-item">
      <div className="checkout-item__img" style={{ backgroundImage }}></div>
      <span className="checkout-item__quantity">{quantity}</span>
      <span className="checkout-item__price">{price}</span>
      <div className="checkout-item__delete"> &times;</div>
    </div>
  );
};

export default CheckoutItem;
