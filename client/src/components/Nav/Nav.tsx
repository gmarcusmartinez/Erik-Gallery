import React from 'react';
import { urls } from './urls';
import { Link } from 'react-router-dom';

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
    <ul className='links'>
      <li>
        Projects
        <ul className='subnav'>
          <Link to='/projects/bigwall' onClick={handleClick}>
            Big Wall Small Bricks
          </Link>
          <Link to='/projects/center' onClick={handleClick}>
            When The Center Does Not Hold
          </Link>
        </ul>
      </li>
      {list}
    </ul>
  );
};

export default Nav;
