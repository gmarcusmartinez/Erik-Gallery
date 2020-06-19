import React from 'react';
import { Link } from 'react-router-dom';
import { urls } from './urls';
import Toggle from '../Toggle/index';
import { ThemeContext } from '../../context/ThemeContext';

interface NavProps {
  setDisplayMobilenav?: Function;
}
const Nav: React.FC<NavProps> = ({ setDisplayMobilenav }) => {
  const { theme } = React.useContext(ThemeContext);
  const clr = theme === 'light' ? '#585858' : '#e5e5e5';

  const handleClick = () => {
    if (setDisplayMobilenav) setDisplayMobilenav(false);
    else return;
  };

  let list = urls.map((url, index) => (
    <li key={index} style={{ textTransform: 'capitalize' }}>
      <Link to={`/${url.to}`} onClick={handleClick} style={{ color: clr }}>
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
