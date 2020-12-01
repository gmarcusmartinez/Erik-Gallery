import React from "react";
import { Link } from "react-router-dom";
import { guestLinks, adminLinks } from "./helpers";

const renderLinks = (bool: boolean, cb: Function, isAdmin: boolean | null) => {
  const direction = bool ? "slide-in" : "slide-out";
  const className = `mobile-navigation__link ${direction}`;

  let links = guestLinks;
  if (isAdmin) links = [...guestLinks, ...adminLinks];

  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    cb();
  };

  const linkEls = links.map((l, i) => (
    <li key={i} className={`${className}-${i}`} onClick={handleClick}>
      <Link to={l.to}>{l.text}</Link>
    </li>
  ));

  return linkEls;
};

export default renderLinks;
