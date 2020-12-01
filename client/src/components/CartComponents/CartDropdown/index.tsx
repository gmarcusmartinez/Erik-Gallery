import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { ICartItem } from "interfaces";
import CartItem from "components/CartComponents/CartItem";
import { toggleCart } from "store/actions/cart";
import { selectCartItems } from "store/selectors/cart";
import { toggleModal } from "store/actions/modal/toggleModal";
import { toggleNav } from "store/actions/nav/toggleNav";

interface IProps {
  cartItems: ICartItem[];
  toggleCart: Function;
  toggleModal: Function;
  toggleNav: Function;
}

const CartDropDown: React.FC<IProps> = (props) => {
  const { cartItems, toggleCart, toggleModal, toggleNav } = props;

  const list =
    cartItems.length && cartItems.map((c, i) => <CartItem key={i} item={c} />);

  const emptyMsg = <span className="empty-message">Your cart is empty</span>;
  const headers = ["Item", "Qty", "Price", "Total"];
  const headerEls = headers.map((h, i) => <div key={i}>{h}</div>);

  const handleClick = () => {
    toggleCart(false);
    toggleModal(false, "");
    toggleNav(false);
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__headers">{headerEls}</div>
      <div className="cart-items">{cartItems.length ? list : emptyMsg}</div>
      <Link to="/checkout" className="cart-dropdown__btn" onClick={handleClick}>
        Go To Cart
      </Link>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps, { toggleCart, toggleModal, toggleNav })(
  CartDropDown
);
