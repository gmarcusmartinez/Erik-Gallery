import React from "react";
import { connect } from "react-redux";
import { Text } from "components/CustomInputs";
import { defaultFormState, textInputs, testFormState } from "./text-inputs";
import { updateShippingInfo } from "store/actions/cart";
import { useHistory } from "react-router-dom";
interface IProps {
  updateShippingInfo: Function;
}

const ShippingScreen: React.FC<IProps> = ({ updateShippingInfo }) => {
  const [formData, setFormData] = React.useState<any>(testFormState);
  const disabled = Object.values(formData).some((value) => value === "");
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateShippingInfo(formData);
    history.push("/payment");
  };
  return (
    <div className="shipping-screen">
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

export default connect(null, { updateShippingInfo })(ShippingScreen);
