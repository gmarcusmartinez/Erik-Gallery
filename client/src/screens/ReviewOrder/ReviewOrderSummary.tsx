import React from "react";

interface IProps {
  cartSummary: {
    itemsPrice: number;
    vatPrice: number;
    totalPrice: number;
  };
}

const ReviewOrderSummary: React.FC<IProps> = (props) => {
  return (
    <div className="review-order__section">
      <div className="review-order__summary">
        <h3 className="review-order__title">Summary</h3>
        <span>Items: {props.cartSummary.itemsPrice}&#8364;</span>
        <span>VAT: {props.cartSummary.vatPrice}&#8364;</span>
        <span>Shipping:{10} &#8364;</span>
        <span>Total: {props.cartSummary.totalPrice + 10}&#8364;</span>
      </div>
      <hr className="checkout-item__border"></hr>
    </div>
  );
};

export default ReviewOrderSummary;
