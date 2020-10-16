import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "assets/shopping-bag.svg";
import { toggleCartHidden } from "store/actions/cart";
import { selectCartItemsCount } from "store/selectors/cart";

interface IProps {
  toggleCartHidden: Function;
  itemCount: number;
}

const CartIcon: React.FC<IProps> = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
