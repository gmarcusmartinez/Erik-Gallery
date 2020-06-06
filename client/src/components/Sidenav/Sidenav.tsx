import React from 'react';
import { projects } from '../../data';
import IconContainer from '../Icons/IconContainer';

interface SidenavProps {
  setFocus: Function;
}

const Sidenav: React.FC<SidenavProps> = ({ setFocus }) => {
  const handleMouseEnter = (_id: string) => {
    setFocus({ _id, isFocused: true });
  };
  const handleMouseOut = () => {
    setFocus({ _id: '', isFocused: false });
  };

  let links = projects.map((p: any) => (
    <li
      onMouseEnter={() => handleMouseEnter(p._id)}
      key={p._id}
      onMouseOut={handleMouseOut}
    >
      {p.title}
    </li>
  ));

  return (
    <div className='sidenav'>
      <h1 className='sidenav__title'>Erik Felfalusi</h1>
      <ul className='project-links'>{links}</ul>
      <IconContainer />
    </div>
  );
};

export default Sidenav;
