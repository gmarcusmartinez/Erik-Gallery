import React from 'react';
import { Text } from 'components/CustomInputs';
import { textInputs, blankFormState } from './text-inputs';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import CheckoutSteps from 'components/CheckoutComponents/CheckoutSteps';

const ShippingScreen: React.FC = () => {
  const { updateShippingAddress } = useActions();
  const { shippingAddress } = useTypedSelector(({ cart }) => cart);
  const defaultFormState = shippingAddress ? shippingAddress : blankFormState;
  const [formData, setFormData] = React.useState<any>(defaultFormState);

  const disabled = Object.values(formData).some((value) => value === '');
  const history = useHistory();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateShippingAddress(formData);
    history.push('/payment');
  };

  return (
    <div className='shipping-screen'>
      <CheckoutSteps shipping />
      <form className='shipping-form' onSubmit={handleSubmit}>
        <h3 className='shipping-form__title'>Shipping Address</h3>
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
        <button disabled={disabled} type='submit'>
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default ShippingScreen;
