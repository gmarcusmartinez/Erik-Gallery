import React from "react";

interface IProps {
  shippingInfo: any;
}
const ROShippingInfo: React.FC<IProps> = ({ shippingInfo }) => {
  return (
    <div className="review-order__section">
      <h3 className="review-order__title">Shipping Address</h3>
      <span>{shippingInfo.name}</span>
      <span>{shippingInfo.address}</span>
      <span>{shippingInfo.city}</span>
      <span>{shippingInfo.postalCode}</span>
      <span>{shippingInfo.country}</span>
      <hr className="checkout-item__border"></hr>
    </div>
  );
};

export default ROShippingInfo;