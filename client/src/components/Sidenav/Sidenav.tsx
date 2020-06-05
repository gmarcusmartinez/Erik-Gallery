import React from 'react';
import { projects } from '../../data';

interface SidenavProps {
  focus: { isFocused: boolean; _id: string };
  setFocus: Function;
}

const Sidenav: React.FC<SidenavProps> = ({ focus, setFocus }) => {
  const handleMouseEnter = (_id: string) => {
    setFocus({ _id, isFocused: true });
    console.log(_id);
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
    </div>
  );
};

export default Sidenav;
