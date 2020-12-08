import React from "react";

interface IProps {
  cartSummary: {
    itemsTotal: number;
    cartVat: number;
    cartTotal: number;
  };
}

const ReviewOrderSummary: React.FC<IProps> = (props) => {
  return (
    <div className="review-order__section">
      <div className="review-order__summary">
        <h3 className="review-order__title">Summary</h3>
        <span>Items: {props.cartSummary.itemsTotal}&#8364;</span>
        <span>VAT: {props.cartSummary.cartVat}&#8364;</span>
        <span>Shipping: {0}&#8364;</span>
        <span>Total: {props.cartSummary.cartTotal + 0}&#8364;</span>
      </div>
      <hr className="checkout-item__border"></hr>
    </div>
  );
};

export default ReviewOrderSummary;
