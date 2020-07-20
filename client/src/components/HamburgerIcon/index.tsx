import React from 'react';

interface IProps {
  onClick: Function;
  showMobileNav: boolean;
}
const HamburgerIcon: React.FC<IProps> = ({ onClick, showMobileNav }) => {
  return (
    <div
      className={`hamburger ${showMobileNav ? 'checked' : ''}`}
      onClick={() => onClick()}
    >
      <div className='line'></div>
    </div>
  );
};

export default HamburgerIcon;
