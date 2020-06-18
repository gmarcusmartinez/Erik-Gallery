import React from 'react';
import { Link } from 'react-router-dom';
import IconContainer from '../Icons/IconContainer';

interface HeaderProps {
  setDisplayMobilenav: Function;
}

const Header: React.FC<HeaderProps> = ({ setDisplayMobilenav }) => {
  return (
    <div className='header'>
      <div
        className='header__menu-trigger'
        onClick={() => setDisplayMobilenav(true)}
      >
        <i className='fas fa-bars'></i>
      </div>
      <Link to='/' className='header__title'>
        Erik<span>Felfalusi</span>
      </Link>
      <IconContainer />
    </div>
  );
};

export default Header;
