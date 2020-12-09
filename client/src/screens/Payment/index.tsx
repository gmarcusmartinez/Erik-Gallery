import React, { FC } from "react";
import { connect } from "react-redux";
import CheckoutSteps from "components/CheckoutComponents/CheckoutSteps";
import { createStructuredSelector } from "reselect";
import { selectShippingAddress } from "store/selectors/cart";
import { IShippingAddress } from "interfaces";
import { useHistory } from "react-router-dom";
import PayPalIcon from "components/CommonComponents/PayPalIcon";
import { updatePaymentMethod } from "store/actions/cart";

interface IProps {
  shippingAddress: IShippingAddress;
  updatePaymentMethod: Function;
}

const PaymentScreen: FC<IProps> = ({
  shippingAddress,
  updatePaymentMethod,
}) => {
  const [paymentMethod, setPaymentMethod] = React.useState("");
  const history = useHistory();
  const disabled = paymentMethod === "";

  React.useEffect(() => {
    if (!shippingAddress) history.push("/shipping");
  }, [history, shippingAddress]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePaymentMethod(paymentMethod);
    history.push("/review-order");
  };

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
  shippingAddress: selectShippingAddress,
});
export default connect(mapStateToProps, { updatePaymentMethod })(PaymentScreen);
