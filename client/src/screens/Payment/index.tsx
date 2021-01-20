import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import CheckoutSteps from 'components/CheckoutComponents/CheckoutSteps';
import PayPalIcon from 'components/CommonComponents/PayPalIcon';

const PaymentScreen: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = React.useState('');
  const { updatePaymentMethod } = useActions();
  const { shippingAddress } = useTypedSelector(({ cart }) => cart);
  const history = useHistory();

  React.useEffect(() => {
    if (!shippingAddress) history.push('/shipping');
  }, [history, shippingAddress]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updatePaymentMethod(paymentMethod);
    history.push('/review-order');
  };

  return (
    <div className='payment-screen'>
      <CheckoutSteps shipping payment />
      <form className='payment-method-form' onSubmit={handleSubmit}>
        <h3 className='payment-method-form__title'>Payment Method</h3>
        <div className='payment-method-form__input-group'>
          <input type='radio' value='paypal' onChange={handleChange} />
          <PayPalIcon />
        </div>
        <button
          disabled={paymentMethod === ''}
          type='submit'
          className='payment-method-form__btn'
        >
          Proceed to Place Order
        </button>
      </form>
    </div>
  );
};
export default PaymentScreen;
