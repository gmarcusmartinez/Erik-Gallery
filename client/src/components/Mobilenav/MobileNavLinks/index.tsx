import React from 'react';
import { Link } from 'react-router-dom';

const urls = [
  // { to: 'gallery', text: 'gallery' },
  { to: 'prints', text: 'print work' },
  { to: 'zines', text: 'zines' },
  { to: 'sound', text: 'sound' },
  { to: 'contact', text: 'contact' },
];

interface IProps {
  setShowMobileNav: Function;
}

const MobileNavLinks: React.FC<IProps> = ({ setShowMobileNav }) => {
  const handleClick = () => setShowMobileNav(false);

  const links = urls.map((l) => (
    <Link key={l.to} to={l.to} onClick={handleClick}>
      {l.text}
    </Link>
  ));
  return <div className='mobile-nav-links'>{links}</div>;
};

export default MobileNavLinks;
