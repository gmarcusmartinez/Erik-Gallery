import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { toggleNav } from "store/actions/nav/toggleNav";
import renderLinks from "./RenderLinks";
import { toggleModal } from "store/actions/modal/toggleModal";
import setScrollLock from "utils/set-scroll-lock";
import { disableBodyScroll } from "body-scroll-lock";

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
  const path = history.location.pathname.split("/")[1];

  React.useEffect(() => {
    disableBodyScroll(document.querySelector(".main-content")!);
    return () => {
      setScrollLock(path);
    };
  }, [path]);

  return (
    <ul className={`navigation ${navOpen} ${adminLinks}`}>
      {renderLinks(isOpen, closeModalAndNav, isAdmin)}
      <div className="navigation__padding"></div>
    </ul>
  );
};

const mapStateToProps = (state: any) => ({
  isOpen: state.nav.isOpen,
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { toggleNav, toggleModal })(Links);
