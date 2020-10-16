import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { toggleNavOpen } from "store/actions/nav";

const urls = [
  { to: "prints", text: "print work" },
  { to: "zines", text: "zines" },
  { to: "sound", text: "sound" },
  { to: "contact", text: "contact" },
];

interface IProps {
  toggleNavOpen: Function;
}

const MobileNavLinks: React.FC<IProps> = ({ toggleNavOpen }) => {
  const links = urls.map((l) => (
    <Link key={l.to} to={l.to} onClick={() => toggleNavOpen()}>
      {l.text}
    </Link>
  ));
  return <div className="mobile-nav-links">{links}</div>;
};

export default connect(null, { toggleNavOpen })(MobileNavLinks);
