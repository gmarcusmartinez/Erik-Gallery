import React from 'react';
import { Link } from 'react-router-dom';

interface NavProps {
  cb?: Function;
}

const Nav: React.FC<NavProps> = ({ cb }) => {
  const handleClick = () => {
    if (cb) cb(false);
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
        Zines
        <ul className='subnav'>
          <Link to='/zines/1' onClick={handleClick}>
            Zine 01
          </Link>
          <Link to='/zines/2' onClick={handleClick}>
            Zine 02
          </Link>
        </ul>
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
