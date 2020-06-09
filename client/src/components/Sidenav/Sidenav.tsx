import React from 'react';
import { Link } from 'react-router-dom';
import { navlinks } from '../../data';

interface SidenavProps {}

const Sidenav: React.FC<SidenavProps> = () => {
  let links = navlinks.map((l: any) => (
    <Link key={l.text} to={`/${l.text}`}>
      {l.text}
    </Link>
  ));

  return (
    <div className='sidenav'>
      <div className='links'>{links}</div>
    </div>
  );
};

export default Sidenav;
