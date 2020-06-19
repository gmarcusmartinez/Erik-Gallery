import React from 'react';
import { Link } from 'react-router-dom';
import IconContainer from '../Icons/IconContainer';
import { ThemeContext } from '../../context/ThemeContext';

interface HeaderProps {
  setDisplayMobilenav: Function;
}

const Header: React.FC<HeaderProps> = ({ setDisplayMobilenav }) => {
  const { theme } = React.useContext(ThemeContext);
  const clr = theme === 'light' ? '#585858' : '#e5e5e5';

  return (
    <div className='header'>
      <div
        className='header__menu-trigger'
        onClick={() => setDisplayMobilenav(true)}
      >
        <i className='fas fa-bars'></i>
      </div>
      <Link to='/' className='header__title' style={{ color: clr }}>
        Erik<span>Felfalusi</span>
      </Link>
      <IconContainer />
    </div>
  );
};

export default Header;
