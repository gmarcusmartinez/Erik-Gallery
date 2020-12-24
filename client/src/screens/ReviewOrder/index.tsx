import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { PayPalButton } from "react-paypal-button-v2";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { ICartItem, IOrder, IShippingAddress } from "interfaces";
import addPayPalScript from "utils/add-paypal-script";
import { createOrder, updateOrder } from "store/actions/orders";
import CheckoutSteps from "components/CheckoutComponents/CheckoutSteps";
import * as RO from "./components";
import * as cartSelectors from "store/selectors/cart";
import * as orderSelectors from "store/selectors/order";

interface IProps {
  cartItems: ICartItem[];
  shippingAddress: IShippingAddress;
  paymentMethod: string;
  itemsPrice: number;
  vatPrice: number;
  totalPrice: number;
  createOrder: Function;
  updateOrder: Function;
  order: IOrder;
}

const ReviewOrder: FC<IProps> = (props) => {
  const [sdkReady, setSdkReady] = React.useState(false);
  const { itemsPrice, vatPrice, totalPrice } = props;
  const cartSummary = { itemsPrice, vatPrice, totalPrice };
  const orderId = props.order?.id;

  const prepareOrder = (orderId?: string) => {
    const formData = {
      orderItems: props.cartItems,
      shippingAddress: props.shippingAddress,
      paymentMethod: props.paymentMethod,
      shippingPrice: 10,
      ...cartSummary,
    };
    if (orderId) props.updateOrder(orderId, formData);
    else props.createOrder(formData);
  };

  const successPaymentHandler = (paymentResult: any) =>
    console.log(paymentResult);

  const emptyCart = props.cartItems.length <= 0;
  const history = useHistory();

  React.useEffect(() => {
    prepareOrder(orderId);
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
        {sdkReady && (
          <PayPalButton
            amount={totalPrice}
            options={{ currency: "EUR" }}
            onSuccess={successPaymentHandler}
            onButtonReady={() => setSdkReady(true)}
          />
        )}
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
  order: orderSelectors.selectOrder,
});

export default connect(mapStateToProps, { createOrder, updateOrder })(
  ReviewOrder
);
