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

const Checkout: React.FC<IProps> = ({ cartItems, total }) => {
  const headers = ["Item", "Quantity", "Price", "Remove"];

  const renderHeaders = headers.map((h, i) => (
    <div key={i} className="checkout__header">
      {h}
    </div>
  ));
  const list = cartItems.map((c, i) => <CheckoutItem item={c} key={i} />);

  const history = useHistory();
  const handleClick = () => history.push("/shipping");
  const renderProceedToCheckoutBtn = (bool: boolean) =>
    bool ? (
      <div className="checkout__btn" onClick={handleClick}>
        Proceed to Checkout
      </div>
    ) : null;

  return (
    <div className="checkout">
      <div className="checkout-details">
        <div className="checkout__headers">{renderHeaders}</div>
        <hr className="checkout-item__border"></hr>
        {list}
        <div className="checkout__total">
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
export default connect(mapStateToProps, {})(Checkout);
