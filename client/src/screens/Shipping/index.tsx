import React, { FC } from "react";
import { connect } from "react-redux";
import { Text } from "components/CustomInputs";
import { textInputs, blankFormState } from "./text-inputs";
import { updateShippingAddress } from "store/actions/cart";
import { useHistory } from "react-router-dom";
import CheckoutSteps from "components/CheckoutComponents/CheckoutSteps";
import { selectShippingAddress } from "store/selectors/cart";
import { IShippingAddress } from "interfaces";
import { createStructuredSelector } from "reselect";

interface IProps {
  updateShippingAddress: Function;
  shippingAddress?: IShippingAddress;
}

const ShippingScreen: FC<IProps> = ({
  updateShippingAddress,
  shippingAddress,
}) => {
  const defaultFormState = shippingAddress ? shippingAddress : blankFormState;
  const [formData, setFormData] = React.useState<any>(defaultFormState);
  const disabled = Object.values(formData).some((value) => value === "");
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateShippingAddress(formData);
    history.push("/payment");
  };

  return (
    <div className="shipping-screen">
      <CheckoutSteps shipping />
      <form className="shipping-form" onSubmit={handleSubmit}>
        <h3 className="shipping-form__title">Shipping Address</h3>
        {textInputs.map((t, i) => (
          <Text
            key={i}
            label={t.label}
            name={t.name}
            value={formData[t.value]}
            onChange={handleChange}
            required={true}
          />
        ))}
        <button
          disabled={disabled}
          type="submit"
          className="shipping-form__btn"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shippingAddress: selectShippingAddress,
});
export default connect(mapStateToProps, {
  updateShippingAddress,
})(ShippingScreen);
