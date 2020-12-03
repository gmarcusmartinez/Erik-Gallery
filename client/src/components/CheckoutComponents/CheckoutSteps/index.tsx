import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  shipping?: boolean;
  payment?: boolean;
  review?: boolean;
}

const CheckoutSteps: React.FC<IProps> = ({ shipping, payment, review }) => {
  const shippingLink = shipping ? (
    <NavLink
      className="checkout-steps__link"
      to="/shipping"
      activeClassName="selected-checkout-step-link"
    >
      Shipping
    </NavLink>
  ) : (
    <span className="checkout-steps__span">Shipping</span>
  );
  const paymentLink = payment ? (
    <NavLink
      className="checkout-steps__link"
      to="/payment"
      activeClassName="selected-checkout-step-link"
    >
      Payment
    </NavLink>
  ) : (
    <span className="checkout-steps__span">Payment</span>
  );
  const reviewLink = review ? (
    <NavLink
      className="checkout-steps__link"
      to="/review-order"
      activeClassName="selected-checkout-step-link"
    >
      Review
    </NavLink>
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
