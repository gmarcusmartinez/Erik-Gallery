import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Links } from 'components/Navigation/links';
import X from '../../assets/x.png';

const Navigation = () => {
  const { toggleNav } = useActions();
  const { isOpen } = useTypedSelector((state) => state.nav);

  const handleClick = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    toggleNav(false);
  };

  return (
    <div className='header'>
      <img src={X} alt='X' onClick={() => toggleNav(!isOpen)} />
      <Link to='/' className='header__title'>
        <span onClick={handleClick} style={{ fontWeight: 700 }}>
          Erik
          <span className='blurred-text'>Felfalusi</span>
        </span>
      </Link>
      {isOpen && <Links />}
    </div>
  );
};

export default Navigation;
