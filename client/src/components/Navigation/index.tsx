import React, { FC } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Links from "components/Navigation/links";
import MenuBars from "./MenuBars";
import CartDropDown from "components/CartComponents/CartDropdown";
import CartIcon from "components/CartComponents/CartIcon";
import { toggleNav } from "store/actions/nav/toggleNav";
import { selectNavIsOpen } from "store/selectors/nav";
import { selectCartIsOpen, selectCartIsEmpty } from "store/selectors/cart";

interface IProps {
  isOpen: boolean;
  cartOpen: boolean;
  cartIsEmpty: boolean;
  toggleNav: Function;
}

const Navigation: FC<IProps> = ({
  cartIsEmpty,
  isOpen,
  cartOpen,
  toggleNav,
}) => {
  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    toggleNav(false);
  };

  return (
    <>
      <div className="header">
        <MenuBars bool={isOpen} cb={toggleNav} />
        <Link to="/" className="header__title">
          <span onClick={handleClick}>Erik Felfalusi</span>
        </Link>
        {!cartIsEmpty && <CartIcon />}
        {cartOpen && <CartDropDown />}
        {isOpen && <Links />}
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectNavIsOpen,
  cartOpen: selectCartIsOpen,
  cartIsEmpty: selectCartIsEmpty,
});

export default connect(mapStateToProps, { toggleNav })(Navigation);
