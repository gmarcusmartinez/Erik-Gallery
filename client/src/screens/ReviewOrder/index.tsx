import React from 'react';
import { useActions } from 'hooks/use-actions';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from 'hooks/use-typed-selector';
import * as cartUtils from 'utils/cart';
import * as RO from './components';
import CheckoutSteps from 'components/CheckoutComponents/CheckoutSteps';

const ReviewOrder: React.FC = () => {
  const { createOrder, updateOrder } = useActions();
  const { selectedItem } = useTypedSelector(({ orders }) => orders);
  const { cartItems, shippingAddress, paymentMethod } = useTypedSelector(
    ({ cart }) => cart
  );
  const vatPrice = cartUtils.calculateVat(cartItems);
  const totalPrice = cartUtils.calculateTotal(cartItems);
  const itemsPrice = cartUtils.calculateItemsTotal(cartItems);
  const cartSummary = { itemsPrice, vatPrice, totalPrice };
  const history = useHistory();

  const prepareOrder = () => {
    const formData = {
      orderItems: cartItems,
      shippingAddress,
      paymentMethod,
      shippingPrice: 10,
      ...cartSummary,
    };

    return selectedItem?.id
      ? updateOrder(selectedItem.id, formData)
      : createOrder(formData);
  };

  React.useEffect(() => {
    prepareOrder();
    if (cartItems.length <= 0) history.push('/');
    // eslint-disable-next-line
  }, [history]);

  return (
    <div className='review-order'>
      <CheckoutSteps shipping payment review />
      <div className='review-order__details'>
        <RO.Shipping shippingAddress={shippingAddress} />
        <RO.PayMeth paymentMethod={paymentMethod} />
        <RO.Items cartItems={cartItems} />
        <RO.Summary cartSummary={cartSummary} />
        <RO.SDK totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default ReviewOrder;
