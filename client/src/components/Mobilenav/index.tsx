import React from 'react';
import ReactDOM from 'react-dom';
import Nav from '../Nav';
import { ThemeContext } from '../../context/ThemeContext';

interface MobilenavProps {
  displayMobileNav: boolean;
  setDisplayMobilenav: Function;
}

const Mobilenav: React.FC<MobilenavProps> = ({
  displayMobileNav,
  setDisplayMobilenav,
}) => {
  const { theme } = React.useContext(ThemeContext);
  const bg = theme === 'light' ? '#fff' : '#212121';

  return ReactDOM.createPortal(
    <div
      className={`m-nav ${displayMobileNav ? 'open' : ''}`}
      onClick={() => setDisplayMobilenav(false)}
    >
      <div
        className={`m-nav__body`}
        onClick={(e) => e.stopPropagation()}
        style={{ backgroundColor: bg }}
      >
        {displayMobileNav ? (
          <Nav setDisplayMobilenav={setDisplayMobilenav} />
        ) : null}
      </div>
    </div>,
    document.querySelector('#mobile-nav')!
  );
};

export default Mobilenav;
