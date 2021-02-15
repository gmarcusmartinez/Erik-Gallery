import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Links from 'components/Navigation/links';

const Navigation = () => {
  const { toggleNav } = useActions();
  const { isOpen } = useTypedSelector((state) => state.nav);

  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    toggleNav(false);
  };

  return (
    <div className='header'>
      <div className='menu-bars' onClick={() => toggleNav(!isOpen)}>
        <div className={`bar ${isOpen ? 'change' : ''}`} />
        <div className={`bar ${isOpen ? 'change' : ''}`} />
        <div className={`bar ${isOpen ? 'change' : ''}`} />
      </div>
      <Link to='/' className='header__title'>
        <span onClick={handleClick}>Erik Felfalusi</span>
      </Link>
      {isOpen && <Links />}
    </div>
  );
};

export default Navigation;
