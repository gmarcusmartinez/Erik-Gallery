import React, { FC } from "react";
import CheckoutSteps from "components/CheckoutComponents/CheckoutSteps";
import { ICartItem, IShippingInfo } from "interfaces";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
  selectPaymentMethod,
  selectShippingInfo,
} from "store/selectors/cart";
import ReviewOrderItem from "./ReviewOrderItem";

interface IProps {
  cartItems: ICartItem[];
  paymentMethod: string;
  shippingInfo: IShippingInfo;
  cartTotal: number;
}

const ReviewOrder: FC<IProps> = ({
  cartItems,
  shippingInfo,
  paymentMethod,
  cartTotal,
}) => {
  const { firstName, lastName } = shippingInfo;
  const list = cartItems.map((c) => <ReviewOrderItem key={c._id} c={c} />);

  return (
    <div className="review-order">
      <CheckoutSteps shipping payment review />
      <h3 className="review-order__title">Shipping Address</h3>
      <div className="review-order__section">
        <span>
          {firstName} {lastName}
        </span>
        <span>{shippingInfo.address}</span>
        <span>{shippingInfo.city}</span>
        <span>{shippingInfo.postalCode}</span>
        <span>{shippingInfo.country}</span>
      </div>
      <hr className="checkout-item__border"></hr>

      <h3 className="review-order__title">Payment Method</h3>
      <div className="review-order__section">
        <span>{paymentMethod}</span>
      </div>
      <hr className="checkout-item__border"></hr>

      <h3 className="review-order__title">Items</h3>
      {list}
      <hr className="checkout-item__border"></hr>

      <h3 className="review-order__title">Summary</h3>
      <div className="review-order__summary">
        <span>Items: {cartTotal}&#8364;</span>
        <span>Shipping: {0}&#8364;</span>
        <span>Total: {cartTotal + 0}&#8364;</span>
      </div>
      <hr className="checkout-item__border"></hr>
      <div className="review-order__btn">Place Order</div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shippingInfo: selectShippingInfo,
  paymentMethod: selectPaymentMethod,
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps, {})(ReviewOrder);
