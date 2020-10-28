import { connect } from "react-redux";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "store/actions/cart";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={() => toggleCartHidden()}>
      <ShoppingIcon className="shopping-icon" />
    </div>
  );
};

export default connect(null, { toggleCartHidden })(CartIcon);
