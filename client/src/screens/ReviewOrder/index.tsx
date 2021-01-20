import React from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import addPayPalScript from 'utils/add-paypal-script';
import CheckoutSteps from 'components/CheckoutComponents/CheckoutSteps';
import * as RO from './components';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import { calculateVat } from 'utils/cart/calculate-vat';
import { calculateTotal } from 'utils/cart/calculate-cart-total';
import { calculateItemsTotal } from 'utils/cart/calculate-cart-items';

const ReviewOrder: React.FC = () => {
  const [sdkReady, setSdkReady] = React.useState(false);
  const { createOrder, updateOrder } = useActions();
  const { selectedItem } = useTypedSelector(({ orders }) => orders);
  const { cartItems, shippingAddress, paymentMethod } = useTypedSelector(
    ({ cart }) => cart
  );
  const vatPrice = calculateVat(cartItems);
  const totalPrice = calculateTotal(cartItems);
  const itemsPrice = calculateItemsTotal(cartItems);
  const cartSummary = { itemsPrice, vatPrice, totalPrice };
  const orderId = selectedItem?.id;

  const prepareOrder = (orderId?: string) => {
    const formData = {
      orderItems: cartItems,
      shippingAddress,
      paymentMethod,
      shippingPrice: 10,
      ...cartSummary,
    };

    if (orderId) updateOrder(orderId, formData);
    else createOrder(formData);
  };

  const successPaymentHandler = (paymentResult: any) =>
    console.log(paymentResult);

  const emptyCart = cartItems.length <= 0;
  const history = useHistory();

  React.useEffect(() => {
    prepareOrder(orderId);
    addPayPalScript(setSdkReady);
    if (emptyCart) history.push('/');
    // eslint-disable-next-line
  }, [history, emptyCart, orderId]);

  return (
    <div className='review-order'>
      <CheckoutSteps shipping payment review />
      <div className='review-order__details'>
        <RO.Shipping shippingAddress={shippingAddress} />
        <RO.PayMeth paymentMethod={paymentMethod} />
        <RO.Items cartItems={cartItems} />
        <RO.Summary cartSummary={cartSummary} />
        {sdkReady && (
          <PayPalButton
            amount={totalPrice}
            options={{ currency: 'EUR' }}
            onSuccess={successPaymentHandler}
            onButtonReady={() => setSdkReady(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewOrder;
