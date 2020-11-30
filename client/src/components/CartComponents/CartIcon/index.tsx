import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { toggleCart } from "store/actions/cart";
import { selectCartItemsCount, selectCartIsOpen } from "store/selectors/cart";

interface IProps {
  isOpen: boolean;
  itemCount: number;
  toggleCart: Function;
}

const CartIcon: React.FC<IProps> = ({ isOpen, toggleCart, itemCount }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCart(!isOpen)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectCartIsOpen,
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCart })(CartIcon);
