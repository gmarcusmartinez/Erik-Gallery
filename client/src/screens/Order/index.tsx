import React from "react";
import { useHistory } from "react-router-dom";

const Order: React.FC = () => {
  const history = useHistory();
  const orderId = history.location.pathname.split("/")[3];

  React.useEffect(() => {}, []);
  return <div>Order Screen for order: {orderId}</div>;
};

export default Order;
