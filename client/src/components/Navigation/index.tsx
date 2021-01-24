import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Links from 'components/Navigation/links';
import MenuBars from './MenuBars';

const Navigation: React.FC = () => {
  const { toggleNav } = useActions();
  const { isOpen } = useTypedSelector((state) => state.nav);

  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    toggleNav(false);
  };

  return (
    <div className='header'>
      <MenuBars bool={isOpen} cb={toggleNav} />
      <Link to='/' className='header__title'>
        <span onClick={handleClick}>Erik Felfalusi</span>
      </Link>
      {isOpen && <Links />}
    </div>
  );
};

export default Navigation;
