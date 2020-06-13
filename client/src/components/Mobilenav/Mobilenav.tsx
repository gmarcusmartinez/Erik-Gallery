import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav/Nav';

interface MobilenavProps {
  setDisplayMobilenav: Function;
}

const Mobilenav: React.FC<MobilenavProps> = ({ setDisplayMobilenav }) => {
  return ReactDOM.createPortal(
    <div className='m-nav' onClick={() => setDisplayMobilenav(false)}>
      <div className='m-nav__body' onClick={(e) => e.stopPropagation()}>
        <Nav cb={setDisplayMobilenav} />
      </div>
    </div>,
    document.querySelector('#mobile-nav')!
  );
};

export default Mobilenav;
