import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { renderLinks } from "./links";
import { toggleNav } from "store/actions/nav/toggleNav";

interface IProps {
  isOpen: boolean;
  toggleNav: Function;
  currentUser: { role: string };
}

const Navigation: React.FC<IProps> = ({ isOpen, toggleNav, currentUser }) => {
  let isAdmin = null;
  if (currentUser && currentUser.role === "admin") isAdmin = true;

  const mobilNavClass = `${isOpen ? "open" : "closed"} ${
    isAdmin ? "admin-layout" : ""
  }`;

  return (
    <>
      <div className="header">
        <MenuBars bool={isOpen} cb={toggleNav} />
        <Link to="/" className="header__title">
          <span onClick={() => toggleNav(false)}>Erik Felfalusi</span>
        </Link>
        <ul className={`mobile-navigation  ${mobilNavClass}`}>
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
