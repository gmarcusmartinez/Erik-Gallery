import React, { FC } from "react";
import CheckoutSteps from "components/CheckoutComponents/CheckoutSteps";
import { ICartItem, IShippingInfo } from "interfaces";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as cartSelectors from "store/selectors/cart";
import { createOrder } from "store/actions/orders";
import ReviewOrderItem from "./ReviewOrderItem";
import ROShippingInfo from "./ROShippingInfo";

interface IProps {
  cartItems: ICartItem[];
  cartTotal: number;
  createOrder: Function;
  paymentMethod: string;
  shippingInfo: IShippingInfo;
}

const ReviewOrder: FC<IProps> = (props) => {
  const list = props.cartItems.map((c) => (
    <ReviewOrderItem key={c._id} c={c} />
  ));

  const handlePlaceOrder = () => {
    const formData = {
      orderItems: props.cartItems,
      shippingAddress: props.shippingInfo,
      paymentMethod: props.paymentMethod,
    };

    console.log(formData);
  };

  return (
    <div className="review-order">
      <CheckoutSteps shipping payment review />
      <div className="review-order__details">
        <ROShippingInfo shippingInfo={props.shippingInfo} />

        <div className="review-order__section">
          <h3 className="review-order__title">Payment Method</h3>
          <span>{props.paymentMethod}</span>
          <hr className="checkout-item__border"></hr>
        </div>

        <div className="review-order__section">
          <h3 className="review-order__title">Items</h3>
          {list}
          <hr className="checkout-item__border"></hr>
        </div>

        <div className="review-order__section">
          <div className="review-order__summary">
            <h3 className="review-order__title">Summary</h3>
            <span>Items: {props.cartTotal}&#8364;</span>
            <span>Shipping: {0}&#8364;</span>
            <span>Total: {props.cartTotal + 0}&#8364;</span>
            <hr className="checkout-item__border"></hr>
          </div>
        </div>

        <div className="review-order__btn" onClick={handlePlaceOrder}>
          Place Order
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shippingInfo: cartSelectors.selectShippingInfo,
  paymentMethod: cartSelectors.selectPaymentMethod,
  cartItems: cartSelectors.selectCartItems,
  cartTotal: cartSelectors.selectCartTotal,
});

export default connect(mapStateToProps, { createOrder })(ReviewOrder);
