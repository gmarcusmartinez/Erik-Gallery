import React from 'react';
import { Link } from 'react-router-dom';

interface NavProps {
  setDisplayMobilenav?: Function;
}

const Nav: React.FC<NavProps> = ({ setDisplayMobilenav }) => {
  const handleClick = () => {
    if (setDisplayMobilenav) setDisplayMobilenav(false);
    else return;
  };
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
      <li>
        <Link to='/zines' onClick={handleClick}>
          Zines
        </Link>
      </li>
      <li>
        <Link to='/clothing' onClick={handleClick}>
          Clothing
        </Link>
      </li>
      <li>
        <Link to='/prints' onClick={handleClick}>
          Prints
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
