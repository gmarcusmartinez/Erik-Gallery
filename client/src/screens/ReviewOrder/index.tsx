import React, { FC } from "react";
import { connect } from "react-redux";
import { ICartItem, IShippingAddress } from "interfaces";
import { createStructuredSelector } from "reselect";
import * as cartSelectors from "store/selectors/cart";
import { createOrder } from "store/actions/orders";
import ReviewOrderShipping from "./ReviewOrderShipping";
import ReviewOrderSummary from "./ReviewOrderSummary";
import ReviewOrderPayMeth from "./ReviewOrderPayMeth";
import CheckoutSteps from "components/CheckoutComponents/CheckoutSteps";
import ReviewOrderItems from "./ReviewOrderItems";
import { useHistory } from "react-router-dom";

interface IProps {
  cartItems: ICartItem[];
  shippingAddress: IShippingAddress;
  paymentMethod: string;
  itemsPrice: number;
  vatPrice: number;
  totalPrice: number;
  createOrder: Function;
}

const ReviewOrder: FC<IProps> = (props) => {
  const handlePlaceOrder = () => {
    const formData = {
      orderItems: props.cartItems,
      shippingAddress: props.shippingAddress,
      paymentMethod: props.paymentMethod,
      itemsPrice: props.itemsPrice,
      vatPrice: props.vatPrice,
      shippingPrice: 10,
      totalPrice: props.totalPrice,
    };
    props.createOrder(formData);
  };

  const { itemsPrice, vatPrice, totalPrice } = props;
  const cartSummary = { itemsPrice, vatPrice, totalPrice };

  const history = useHistory();
  React.useEffect(() => {
    if (props.cartItems.length <= 0) history.push("/");
  }, [history, props.cartItems.length]);

  return (
    <div className="review-order">
      <CheckoutSteps shipping payment review />
      <div className="review-order__details">
        <ReviewOrderShipping shippingAddress={props.shippingAddress} />
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
  shippingAddress: cartSelectors.selectShippingAddress,
  paymentMethod: cartSelectors.selectPaymentMethod,
  cartItems: cartSelectors.selectCartItems,
  totalPrice: cartSelectors.selectCartTotal,
  vatPrice: cartSelectors.selectCartVAT,
  itemsPrice: cartSelectors.selectItemsTotal,
});

export default connect(mapStateToProps, { createOrder })(ReviewOrder);
