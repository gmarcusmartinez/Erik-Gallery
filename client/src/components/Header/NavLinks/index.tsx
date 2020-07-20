import React from 'react';
import { Link } from 'react-router-dom';

const urls = [
  { to: 'gallery', text: 'gallery' },
  { to: 'prints', text: 'print work' },
  { to: 'zines', text: 'zines' },
  { to: 'sound', text: 'sound' },
  { to: 'contact', text: 'contact' },
];

const NavLinks = () => {
  const list = urls.map((url) => (
    <Link key={url.to} to={url.to}>
      {url.text}
    </Link>
  ));
  return <ul className='links'>{list}</ul>;
};

export default NavLinks;
