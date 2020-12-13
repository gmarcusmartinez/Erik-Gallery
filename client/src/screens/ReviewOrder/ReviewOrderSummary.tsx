import React from "react";
import { toTwoDecimals } from "utils";

interface IProps {
  cartSummary: {
    itemsPrice: number;
    vatPrice: number;
    totalPrice: number;
  };
}

export const ReviewOrderSummary: React.FC<IProps> = (props) => {
  const { itemsPrice, vatPrice, totalPrice } = props.cartSummary;
  return (
    <div className="review-order__section">
      <div className="review-order__summary">
        <h3 className="review-order__title">Summary</h3>
        <span>Items: {toTwoDecimals(itemsPrice)}&#8364;</span>
        <span>VAT: {toTwoDecimals(vatPrice)}&#8364;</span>
        <span>Shipping:{10} &#8364;</span>
        <span>Total: {totalPrice + 10}&#8364;</span>
      </div>
      <hr className="checkout-item__border"></hr>
    </div>
  );
};
