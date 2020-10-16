import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "store/selectors/cart";

import HamburgerIcon from "components/HamburgerIcon";
import CartIcon from "components/CartIcon";
import CartDropDown from "components/CartDropDown";

interface IProps {
  hidden: boolean;
}
const Header: React.FC<IProps> = ({ hidden }) => {
  return (
    <div className="header">
      <HamburgerIcon />
      <Link to="/" className="header__title">
        Erik Felfalusi
      </Link>
      <CartIcon />
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, {})(Header);
