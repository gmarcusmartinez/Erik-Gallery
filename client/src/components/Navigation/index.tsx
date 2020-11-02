import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { renderLinks } from "./links";
import { toggleNav } from "store/actions/nav/toggleNav";
// import CartIcon from "../CartIcon";
// import CartDropDown from "components/CartDropDown";

interface IProps {
  isOpen: boolean;
  toggleNav: Function;
  currentUser: { role: string };
}

const Navigation: React.FC<IProps> = ({ isOpen, toggleNav, currentUser }) => {
  let isAdmin = null;
  if (currentUser && currentUser.role === "admin") isAdmin = true;
  return (
    <>
      <div className="header">
        <MenuBars bool={isOpen} cb={toggleNav} />
        <Link to="/" className="header__title">
          Erik Felfalusi
        </Link>
        {/* <CartIcon /> */}
        {/* {hidden ? null : <CartDropDown />} */}
        <ul className={`mobile-navigation ${isOpen ? "open" : "closed"}`}>
          {renderLinks(isOpen, toggleNav, isAdmin)}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  hidden: state.cart.hidden,
  isOpen: state.nav.isOpen,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { toggleNav })(Navigation);

interface MenuBarsProps {
  bool: boolean;
  cb: Function;
}

const MenuBars: React.FC<MenuBarsProps> = ({ bool, cb }) => {
  return (
    <div className="menu-bars" onClick={() => cb(!bool)}>
      <div className={`bar ${bool ? "change" : ""}`}></div>
      <div className={`bar ${bool ? "change" : ""}`}></div>
      <div className={`bar ${bool ? "change" : ""}`}></div>
    </div>
  );
};
