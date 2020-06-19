import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Toggle = () => {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  const clr = theme === 'light' ? '#585858' : '#e5e5e5';

  return (
    <div className='toggle-container' style={{ color: clr }}>
      <span onClick={() => changeTheme('dark')}>Dark</span>
      <span> | </span>
      <span onClick={() => changeTheme('light')}>Light</span>
    </div>
  );
};

export default Toggle;
