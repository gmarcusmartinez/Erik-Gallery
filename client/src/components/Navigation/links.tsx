import React from "react";
import { connect } from "react-redux";
import { toggleNav } from "store/actions/nav/toggleNav";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import renderLinks from "./RenderLinks";

interface IProps {
  isOpen: boolean;
  currentUser: { role: string };
  toggleNav: Function;
}
const Links: React.FC<IProps> = ({ isOpen, currentUser, toggleNav }) => {
  let isAdmin = currentUser && currentUser.role === "admin" ? true : false;
  const navOpen = `${isOpen ? "open" : "closed"}`;
  const adminLinks = `${isAdmin ? "admin-layout" : ""}`;

  React.useEffect(() => {
    disableBodyScroll(document.querySelector(".main-content")!);
    return () => enableBodyScroll(document.querySelector(".main-content")!);
  }, []);

  return (
    <ul className={`mobile-navigation ${navOpen} ${adminLinks}`}>
      {renderLinks(isOpen, toggleNav, isAdmin)}
    </ul>
  );
};

const mapStateToProps = (state: any) => ({
  isOpen: state.nav.isOpen,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { toggleNav })(Links);
