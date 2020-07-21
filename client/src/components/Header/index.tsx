import React from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import HamburgerIcon from 'components/HamburgerIcon';

interface IProps {
  showMobileNav: boolean;
  setShowMobileNav: Function;
}
const Header: React.FC<IProps> = ({ showMobileNav, setShowMobileNav }) => {
  const handleClick = () => setShowMobileNav(!showMobileNav);
  return (
    <div className='header'>
      <HamburgerIcon onClick={handleClick} showMobileNav={showMobileNav} />
      <Link to='/' className='header__title'>
        Erik Felfalusi
      </Link>
      <NavLinks />
    </div>
  );
};

export default Header;