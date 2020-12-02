import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { toggleNav } from "store/actions/nav/toggleNav";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import renderLinks from "./RenderLinks";
import { toggleModal } from "store/actions/modal/toggleModal";

interface IProps {
  isOpen: boolean;
  currentUser: { role: string };
  toggleNav: Function;
  toggleModal: Function;
}

const Links: FC<IProps> = ({ isOpen, currentUser, toggleNav, toggleModal }) => {
  let isAdmin = currentUser && currentUser.role === "admin" ? true : false;
  const navOpen = `${isOpen ? "open" : "closed"}`;
  const adminLinks = `${isAdmin ? "admin-layout" : ""}`;

  const closeModalAndNav = () => {
    toggleModal(false, "", null);
    toggleNav(false);
  };

  const history = useHistory();
  const scrollable = ["prints", "dashboard", "checkout", "shipping"].includes(
    history.location.pathname.split("/")[1]
  );

  React.useEffect(() => {
    disableBodyScroll(document.querySelector(".main-content")!);
    return () => {
      if (scrollable)
        enableBodyScroll(document.querySelector(".main-content")!);
    };
  }, [scrollable]);

  return (
    <ul className={`mobile-navigation ${navOpen} ${adminLinks}`}>
      {renderLinks(isOpen, closeModalAndNav, isAdmin)}
    </ul>
  );
};

const mapStateToProps = (state: any) => ({
  isOpen: state.nav.isOpen,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { toggleNav, toggleModal })(Links);
