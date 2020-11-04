import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleNav } from "store/actions/nav/toggleNav";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

const guestLinks = [
  { to: "prints", text: "print work" },
  { to: "zines", text: "zines" },
  { to: "sound", text: "sound" },
  { to: "contact", text: "contact" },
];
const adminLinks = [
  { to: "dashboard", text: "dashboard" },
  { to: "signout", text: "signout" },
  { to: "", text: "" },
];

interface IProps {
  isOpen: boolean;
  currentUser: { role: string };
}
const Links: React.FC<IProps> = ({ isOpen, currentUser }) => {
  let isAdmin = currentUser && currentUser.role === "admin" ? true : false;
  const navOpen = `${isOpen ? "open" : "closed"}`;
  const adminLinks = `${isAdmin ? "admin-layout" : ""}`;

  React.useEffect(() => {
    disableBodyScroll(document.querySelector(".mobile-navigation")!);
    return () => clearAllBodyScrollLocks();
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

function renderLinks(bool: boolean, cb: Function, isAdmin: boolean | null) {
  const direction = bool ? "slide-in" : "slide-out";
  const className = `mobile-navigation__link ${direction}`;

  let links = guestLinks;
  if (isAdmin) links = [...guestLinks, ...adminLinks];

  const linkEls = links.map((l, i) => (
    <li key={i} className={`${className}-${i}`} onClick={() => cb(false)}>
      <Link to={l.to}>{l.text}</Link>
    </li>
  ));
  return linkEls;
}
