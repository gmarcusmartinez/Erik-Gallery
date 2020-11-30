import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "store/selectors/cart";
import { ICartItem } from "interfaces";
import CheckoutItem from "components/CheckoutItem";
const headers = ["Item", "Quantity", "Price", "Remove"];

interface IProps {
  cartItems: ICartItem[];
}

const Checkout: React.FC<IProps> = ({ cartItems }) => {
  const renderHeaders = headers.map((h, i) => (
    <div key={i} className="checkout__header">
      {h}
    </div>
  ));
  const list = cartItems.map((c) => <CheckoutItem item={c} />);

  return (
    <div className="checkout">
      <div className="checkout__headers">{renderHeaders}</div>
      {list}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps, {})(Checkout);
