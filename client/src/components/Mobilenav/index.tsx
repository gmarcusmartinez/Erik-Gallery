import React from 'react';
import MobileNavLinks from './MobileNavLinks';
interface IProps {
  showMobileNav: boolean;
  setShowMobileNav: Function;
}
const Mobilenav: React.FC<IProps> = ({ showMobileNav, setShowMobileNav }) => {
  return (
    <div className={`m-nav ${showMobileNav ? 'open' : ''}`}>
      <MobileNavLinks setShowMobileNav={setShowMobileNav} />
    </div>
  );
};

export default Mobilenav;
