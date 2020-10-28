import { RouteComponentProps, withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { ICartItem } from "interfaces";
import CustomButton from "components/CustomButton";
import CartItem from "components/CartItem";
// import CustomButton from 'components/CustomButton';
import { toggleCartHidden } from "store/actions/cart";
import { selectCartItems } from "store/selectors/cart";

interface IProps extends RouteComponentProps {
  cartItems: ICartItem[];
  toggleCartHidden: Function;
}
const CartDropDown: React.FC<IProps> = ({
  cartItems,
  history,
  toggleCartHidden,
}) => {
  const list = cartItems.map((c, i) => <CartItem key={i} item={c} />);
  const emptyMsg = <span className="empty-message">Your cart is empty</span>;

  const handleRedirect = () => {
    history.push("/checkout");
    toggleCartHidden();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItems.length ? list : emptyMsg}</div>
      <CustomButton onClick={handleRedirect}>Go to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(
  connect(mapStateToProps, { toggleCartHidden })(CartDropDown)
);
