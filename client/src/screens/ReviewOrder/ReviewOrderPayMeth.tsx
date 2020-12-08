import React from "react";

interface IProps {
  paymentMethod: string;
}
const ReviewOrderPayMeth: React.FC<IProps> = ({ paymentMethod }) => {
  return (
    <>
      <div className="review-order__section">
        <h3 className="review-order__title">Payment Method</h3>
        <span>{paymentMethod}</span>
      </div>
      <hr className="checkout-item__border"></hr>
    </>
  );
};

export default ReviewOrderPayMeth;
