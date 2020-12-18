import React from "react";
import { ICartItem } from "interfaces";

interface IProps {
  item: ICartItem;
}

const CartItem: React.FC<IProps> = ({ item }) => {
  const { mainImage, price, quantity, description, title } = item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;
  const text = description ? description : title;
  return (
    <div className="cart-item">
      <div className="cart-item__img" style={{ backgroundImage }}></div>
      <div className="cart-item__text">{text}</div>
      <div className="cart-item__total">
        <span>{+price}&#8364;</span>
        <span>&times;</span>
        <span>{quantity}</span>
      </div>
    </div>
  );
};
export default CartItem;
