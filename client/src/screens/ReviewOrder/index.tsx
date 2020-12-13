import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { ICartItem, IShippingAddress } from "interfaces";
import addPayPalScript from "utils/add-paypal-script";
import { createOrder } from "store/actions/orders";
import CheckoutSteps from "components/CheckoutComponents/CheckoutSteps";
import * as RO from "./components";
import * as cartSelectors from "store/selectors/cart";

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
  const [sdkReady, setSdkReady] = React.useState(false);
  const { itemsPrice, vatPrice, totalPrice } = props;
  const cartSummary = { itemsPrice, vatPrice, totalPrice };

  const handlePlaceOrder = () => {
    const formData = {
      orderItems: props.cartItems,
      shippingAddress: props.shippingAddress,
      paymentMethod: props.paymentMethod,
      ...cartSummary,
    };
    props.createOrder(formData);
  };

  const successPaymentHandler = (paymentResult: any) =>
    console.log(paymentResult);

  const emptyCart = props.cartItems.length <= 0;
  const history = useHistory();
  React.useEffect(() => {
    addPayPalScript(setSdkReady);
    if (emptyCart) history.push("/");
  }, [history, emptyCart]);

  return (
    <div className="review-order">
      <CheckoutSteps shipping payment review />
      <div className="review-order__details">
        <RO.Shipping shippingAddress={props.shippingAddress} />
        <RO.PayMeth paymentMethod={props.paymentMethod} />
        <RO.Items cartItems={props.cartItems} />
        <RO.Summary cartSummary={cartSummary} />
        <PayPalButton amount={totalPrice} onSuccess={successPaymentHandler} />
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
