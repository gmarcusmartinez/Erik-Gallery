import Spinner from 'components/CommonComponents/Spinner';
import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import addPayPalScript from 'utils/add-paypal-script';

interface IProps {
  totalPrice: number;
}
export const ReviewOrderSdk: React.FC<IProps> = ({ totalPrice }) => {
  const [sdkReady, setSdkReady] = React.useState(false);
  const successPaymentHandler = (paymentResult: any) =>
    console.log(paymentResult);

  React.useEffect(() => {
    addPayPalScript(setSdkReady);
  }, []);

  return (
    <>
      {sdkReady ? (
        <PayPalButton
          amount={totalPrice}
          options={{ currency: 'EUR' }}
          onSuccess={successPaymentHandler}
          onButtonReady={() => setSdkReady(true)}
        />
      ) : (
        <Spinner message='' />
      )}
    </>
  );
};
