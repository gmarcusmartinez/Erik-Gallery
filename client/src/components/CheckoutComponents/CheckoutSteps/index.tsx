import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  shipping?: boolean;
  payment?: boolean;
  review?: boolean;
}

const CheckoutSteps: React.FC<IProps> = ({ shipping, payment, review }) => {
  const shippingLink = shipping ? (
    <Link className="checkout-steps__link" to="/shipping">
      Shipping
    </Link>
  ) : (
    <span className="checkout-steps__span">Shipping</span>
  );
  const paymentLink = payment ? (
    <Link className="checkout-steps__link" to="/payment">
      Payment
    </Link>
  ) : (
    <span className="checkout-steps__span">Payment</span>
  );
  const reviewLink = review ? (
    <Link className="checkout-steps__link" to="/payment">
      Review
    </Link>
  ) : (
    <span className="checkout-steps__span">Review</span>
  );

  return (
    <div className="checkout-steps">
      {shippingLink}
      {paymentLink}
      {reviewLink}
    </div>
  );
};

export default CheckoutSteps;
