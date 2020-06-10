import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { navlinks } from '../../data';
interface MobilenavProps {
  setDisplayMobilenav: Function;
}

const Mobilenav: React.FC<MobilenavProps> = ({ setDisplayMobilenav }) => {
  let links = navlinks.map((l: any) => (
    <Link
      key={l.text}
      to={`/${l.to}`}
      onClick={() => setDisplayMobilenav(false)}
    >
      {l.text}
    </Link>
  ));

  return ReactDOM.createPortal(
    <div className='m-nav' onClick={() => setDisplayMobilenav(false)}>
      <div className='m-nav__body' onClick={(e) => e.stopPropagation()}>
        <div className='links'>{links}</div>
      </div>
    </div>,
    document.querySelector('#mobile-nav')!
  );
};

export default Mobilenav;
