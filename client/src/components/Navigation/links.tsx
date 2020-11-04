import React from "react";
import { Link } from "react-router-dom";

const guestLinks = [
  { to: "prints", text: "print work" },
  { to: "zines", text: "zines" },
  { to: "sound", text: "sound" },
  { to: "contact", text: "contact" },
];
const adminLinks = [
  { to: "dashboard", text: "dashboard" },
  { to: "signout", text: "signout" },
];

export const renderLinks = (
  bool: boolean,
  cb: Function,
  isAdmin: boolean | null
) => {
  const direction = bool ? "slide-in" : "slide-out";
  const className = `mobile-navigation__link ${direction}`;

  let links = guestLinks;
  if (isAdmin) links = [...guestLinks, ...adminLinks];

  const linkEls = links.map((l, i) => (
    <li key={i} className={`${className}-${i}`} onClick={() => cb(false)}>
      <div>
        <Link to={l.to}>{l.text}</Link>
      </div>
    </li>
  ));
  return linkEls;
};
