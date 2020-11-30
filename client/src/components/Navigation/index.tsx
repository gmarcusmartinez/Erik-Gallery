import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Links from "./links";
import { toggleNav } from "store/actions/nav/toggleNav";
import MenuBars from "./MenuBars";
import CartDropDown from "components/CartComponents/CartDropdown";
import { selectNavIsOpen } from "store/selectors/nav";
import { createStructuredSelector } from "reselect";
import { selectCartIsOpen } from "store/selectors/cart";

interface IProps {
  isOpen: boolean;
  cartOpen: boolean;
  toggleNav: Function;
}

const Navigation: React.FC<IProps> = ({ isOpen, cartOpen, toggleNav }) => {
  return (
    <>
      <div className="header">
        <MenuBars bool={isOpen} cb={toggleNav} />
        <Link to="/" className="header__title">
          <span onClick={() => toggleNav(false)}>Erik Felfalusi</span>
        </Link>
        {cartOpen && <CartDropDown />}
        {isOpen && <Links />}
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  isOpen: selectNavIsOpen,
  cartOpen: selectCartIsOpen,
});

export default connect(mapStateToProps, { toggleNav })(Navigation);
