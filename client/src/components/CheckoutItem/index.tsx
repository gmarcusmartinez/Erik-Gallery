import React from "react";
import { connect } from "react-redux";
import { ICartItem } from "interfaces";
import { clearItemFromCart } from "store/actions/cart";

interface IProps {
  item: ICartItem;
  clearItemFromCart: Function;
}
const CheckoutItem: React.FC<IProps> = ({ item, clearItemFromCart }) => {
  const { quantity, price, mainImage } = item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  return (
    <>
      <div className="checkout-item">
        <div className="checkout-item__img" style={{ backgroundImage }}></div>
        <span className="checkout-item__quantity">{quantity}</span>
        <span className="checkout-item__price">{price}&#8364;</span>
        <div
          className="checkout-item__delete"
          onClick={() => clearItemFromCart(item)}
        >
          &times;
        </div>
      </div>
      <hr className="checkout-item__border"></hr>
    </>
  );
};

export default connect(null, { clearItemFromCart })(CheckoutItem);
