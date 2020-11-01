import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../store/actions/cart";

interface IProps {
  toggleCartHidden: Function;
}

const CartIcon: React.FC<IProps> = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      {/* <ShoppingIcon className="shopping-icon" /> */}
    </div>
  );
};

export default connect(null, { toggleCartHidden })(CartIcon);
