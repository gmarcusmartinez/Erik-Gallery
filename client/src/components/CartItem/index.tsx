import React from "react";
import { ICartItem } from "interfaces";

interface IProps {
  item: ICartItem;
}

const CartItem: React.FC<IProps> = ({ item }) => {
  const { image, price, description, quantity } = item;
  return (
    <div className="cart-item">
      <img src={image} alt="item" />
      <div className="item-details">
        <span className="item-description">{description}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
