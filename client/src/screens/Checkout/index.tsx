import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "store/selectors/cart";
import { ICartItem } from "interfaces";
import CheckoutItem from "components/CheckoutItem";
const headers = ["Item", "Quantity", "Price", "Remove"];

interface IProps {
  cartItems: ICartItem[];
  total: number;
}

const Checkout: React.FC<IProps> = ({ cartItems, total }) => {
  const renderHeaders = headers.map((h, i) => (
    <div key={i} className="checkout__header">
      {h}
    </div>
  ));
  const list = cartItems.map((c, i) => <CheckoutItem item={c} key={i} />);

  return (
    <div className="checkout">
      <div className="checkout__headers">{renderHeaders}</div>
      <hr className="checkout-item__border"></hr>
      {list}
      <div className="checkout__total">
        <span>total: ${total}</span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps, {})(Checkout);
