import React from "react";

interface IProps {
  shippingInfo: any;
}
const ReviewOrderShipping: React.FC<IProps> = ({ shippingInfo }) => {
  return (
    <>
      <div className="review-order__shipping">
        <h3 className="review-order__title">Shipping Address</h3>
        <span>{shippingInfo.name}</span>
        <span>{shippingInfo.address}</span>
        <span>{shippingInfo.city}</span>
        <span>{shippingInfo.postalCode}</span>
        <span>{shippingInfo.country}</span>
      </div>
      <hr className="checkout-item__border"></hr>
    </>
  );
};

export default ReviewOrderShipping;
