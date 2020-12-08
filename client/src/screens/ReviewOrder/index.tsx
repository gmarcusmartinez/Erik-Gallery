import React, { FC } from "react";
import { connect } from "react-redux";
import { ICartItem, IShippingInfo } from "interfaces";
import { createStructuredSelector } from "reselect";
import * as cartSelectors from "store/selectors/cart";
import { createOrder } from "store/actions/orders";
import ReviewOrderShipping from "./ReviewOrderShipping";
import ReviewOrderSummary from "./ReviewOrderSummary";
import ReviewOrderPayMeth from "./ReviewOrderPayMeth";
import CheckoutSteps from "components/CheckoutComponents/CheckoutSteps";
import ReviewOrderItems from "./ReviewOrderItems";

interface IProps {
  shippingInfo: IShippingInfo;
  paymentMethod: string;
  cartItems: ICartItem[];
  cartTotal: number;
  cartVat: number;
  itemsTotal: number;
  createOrder: Function;
}

const ReviewOrder: FC<IProps> = (props) => {
  const handlePlaceOrder = () => {
    const formData = {
      orderItems: props.cartItems,
      shippingAddress: props.shippingInfo,
      paymentMethod: props.paymentMethod,
      vatPrice: props.cartVat,
      totalPrice: props.cartTotal,
    };
  };
  const { itemsTotal, cartTotal, cartVat } = props;
  const cartSummary = { itemsTotal, cartTotal, cartVat };

  return (
    <div className="review-order">
      <CheckoutSteps shipping payment review />
      <div className="review-order__details">
        <ReviewOrderShipping shippingInfo={props.shippingInfo} />
        <ReviewOrderPayMeth paymentMethod={props.paymentMethod} />
        <ReviewOrderItems cartItems={props.cartItems} />
        <ReviewOrderSummary cartSummary={cartSummary} />
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
  cartVat: cartSelectors.selectCartVAT,
  itemsTotal: cartSelectors.selectItemsTotal,
});

export default connect(mapStateToProps, { createOrder })(ReviewOrder);
