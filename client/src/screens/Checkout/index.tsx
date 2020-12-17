import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "store/selectors/cart";
import { ICartItem } from "interfaces";
import CheckoutItem from "components/CheckoutComponents/CheckoutItem";

interface IProps {
  cartItems: ICartItem[];
  total: number;
}

const CartScreen: React.FC<IProps> = ({ cartItems, total }) => {
  const headers = ["Item", "Description", "Qty", "Price", "Remove"];

  const renderHeaders = headers.map((h, i) => (
    <div key={i} className="cart__header">
      {h}
    </div>
  ));
  const list = cartItems.map((c, i) => <CheckoutItem item={c} key={i} />);

  const history = useHistory();
  const handleClick = () => history.push("/shipping");
  const renderProceedToCheckoutBtn = (bool: boolean) =>
    bool ? (
      <div className="cart__btn" onClick={handleClick}>
        Proceed to Checkout
      </div>
    ) : null;

  return (
    <div className="cart">
      <div className="cart-details">
        <div className="cart__headers">{renderHeaders}</div>
        {list}
        <div className="cart__total">
          <span>total: {total}&#8364;</span>
        </div>
        {renderProceedToCheckoutBtn(!!cartItems.length)}
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps, {})(CartScreen);
