import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav/Nav';

interface MobilenavProps {
  displayMobileNav: boolean;
  setDisplayMobilenav: Function;
}

const Mobilenav: React.FC<MobilenavProps> = ({
  displayMobileNav,
  setDisplayMobilenav,
}) => {
  return ReactDOM.createPortal(
    <div
      className={`m-nav ${displayMobileNav ? 'open' : ''}`}
      onClick={() => setDisplayMobilenav(false)}
    >
      <div className={`m-nav__body`} onClick={(e) => e.stopPropagation()}>
        <Nav setDisplayMobilenav={setDisplayMobilenav} />
      </div>
    </div>,
    document.querySelector('#mobile-nav')!
  );
};

export default Mobilenav;
