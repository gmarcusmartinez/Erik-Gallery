import React from 'react';
import { Link } from 'react-router-dom';
import { urls } from './urls';
import Toggle from '../Toggle/index';

interface NavProps {
  setDisplayMobilenav?: Function;
}
const Nav: React.FC<NavProps> = ({ setDisplayMobilenav }) => {
  const handleClick = () => {
    if (setDisplayMobilenav) setDisplayMobilenav(false);
    else return;
  };

  let list = urls.map((url, index) => (
    <li key={index} style={{ textTransform: 'capitalize' }}>
      <Link to={`/${url.to}`} onClick={handleClick}>
        {url.text}
      </Link>
    </li>
  ));

  return (
    <>
      <ul className='links'>{list}</ul>
      <Toggle />
    </>
  );
};

export default Nav;
