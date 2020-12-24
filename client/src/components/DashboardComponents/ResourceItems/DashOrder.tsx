import { IOrder } from "interfaces";
import React from "react";
import { useHistory } from "react-router-dom";

interface IProps {
  order: IOrder;
}

const OrderItem: React.FC<IProps> = ({ order }) => {
  const { totalPrice, vatPrice, isPaid, isDelivered, shippingAddress } = order;
  const netPrice = totalPrice - vatPrice;

  const formatDate = (d: Date) => d.toString().split("T")[0];
  const gridTemplateColumns = "22% 18% 12% 12% 12% 12% 12%";

  const paid = isPaid ? "is_paid" : "not_paid";
  const del = isDelivered ? "is_delivered" : "not_delivered";
  const mobile = "order-item__mobile";

  const history = useHistory();
  const handleRedirect = () => history.push(`/dashboard/order/${order.id}`);

  return (
    <div
      className="order-item"
      style={{ gridTemplateColumns }}
      onClick={handleRedirect}
    >
      <div className={mobile}>{shippingAddress.name}</div>
      <div className={mobile}>{formatDate(order.createdAt)}</div>
      <div className={`order-item__text ${paid}`}>{isPaid.toString()}</div>
      <div className={`order-item__text ${del}`}>{isDelivered.toString()}</div>
      <div className="order-item__text">{netPrice.toFixed(2)}&euro;</div>
      <div className="order-item__text">{vatPrice.toFixed(2)}&euro;</div>
      <div className="order-item__text">{totalPrice.toFixed(2)}&euro;</div>
      <hr className="order-item__border"></hr>
    </div>
  );
};

export default OrderItem;
