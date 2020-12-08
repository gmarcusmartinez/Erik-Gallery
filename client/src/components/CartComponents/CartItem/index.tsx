import React from "react";
import { ICartItem } from "interfaces";

interface IProps {
  item: ICartItem;
}

const CartItem: React.FC<IProps> = ({ item }) => {
  const { mainImage, price, quantity } = item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  return (
    <div className="cart-item">
      <div className="cart-item__img" style={{ backgroundImage }}></div>
      <div className="cart-item__qty">{quantity}</div>
      <div className="cart-item__price">{price}&#8364;</div>
      <div className="cart-item__total">{quantity * +price}&#8364; </div>
    </div>
  );
};
export default CartItem;
