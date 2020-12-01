import { Text } from "components/CustomInputs";
import React from "react";
import { defaultFormState, textInputs } from "./text-inputs";

const ShippingScreen = () => {
  const [formData, setFormData] = React.useState<any>(defaultFormState);
  const disabled = Object.values(formData).some((value) => value === "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="shipping-screen">
      <form className="shipping-form" onSubmit={handleSubmit}>
        <h3 className="shipping-form__title">Shipping Details</h3>
        {textInputs.map((t, i) => (
          <Text
            key={i}
            label={t.label}
            name={t.name}
            value={formData[t.value]}
            onChange={handleChange}
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

export default ShippingScreen;
