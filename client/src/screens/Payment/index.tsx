import React from "react";
import { connect } from "react-redux";
import CheckoutSteps from "components/CheckoutComponents/CheckoutSteps";
import { createStructuredSelector } from "reselect";
import { selectShippingInfo } from "store/selectors/cart";
import { IShippingInfo } from "interfaces";
import { useHistory } from "react-router-dom";
import PayPalIcon from "components/CommonComponents/PayPalIcon";

interface IProps {
  shippingInfo: IShippingInfo;
}

const PaymentScreen: React.FC<IProps> = ({ shippingInfo }) => {
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const history = useHistory();
  if (!shippingInfo) history.push("/shipping");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push("/review");
  };
  const disabled = paymentMethod === "";

  return (
    <div className="payment-screen">
      <CheckoutSteps shipping payment />
      <form className="payment-method-form" onSubmit={handleSubmit}>
        <h3 className="payment-method-form__title">Payment Method</h3>
        <div className="payment-method-form__input-group">
          <input type="radio" value="paypal" onChange={handleChange} />
          <PayPalIcon />
        </div>
        <button
          disabled={disabled}
          type="submit"
          className="payment-method-form__btn"
        >
          Proceed to Place Order
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shippingInfo: selectShippingInfo,
});
export default connect(mapStateToProps, {})(PaymentScreen);
