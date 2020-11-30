import React from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { ICartItem } from "interfaces";
import CartItem from "components/CartComponents/CartItem";
import { toggleCart } from "store/actions/cart";
import { selectCartItems } from "store/selectors/cart";

interface IProps {
  cartItems: ICartItem[];
  toggleCart: Function;
}

const CartDropDown: React.FC<IProps> = ({ toggleCart, cartItems }) => {
  const list =
    cartItems.length && cartItems.map((c, i) => <CartItem key={i} item={c} />);
  const emptyMsg = <span className="empty-message">Your cart is empty</span>;
  const headers = ["Item", "Qty", "Price", "Total"].map((h, i) => (
    <div key={i}>{h}</div>
  ));
  // const history = useHistory();

  // const handleRedirect = () => {
  //   history.push("/checkout");
  //   toggleCart();
  // };

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__headers">{headers}</div>
      <div className="cart-items">{cartItems.length ? list : emptyMsg}</div>
      <Link to="/checkout" className="cart-dropdown__btn">
        Go To Checkout
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps, { toggleCart })(CartDropDown);
