import React from 'react';
import { ThemeContext } from '../../context/ThemeContext';
const mediaIcons = [
  {
    text: 'fab fa-instagram',
    to: 'https://www.instagram.com/1000bodies/',
  },
  {
    text: 'fab fa-facebook-square',
    to: 'https://www.facebook.com/1thousandbodies/',
  },
  {
    text: 'fab fa-soundcloud',
    to: 'https://soundcloud.com/1000bodies',
  },
];

const IconContainer = () => {
  const { theme } = React.useContext(ThemeContext);
  const clr = theme === 'light' ? '#585858' : '#e5e5e5';

  const icons = mediaIcons.map((i: any, index) => (
    <a href={i.to} target='blank' key={index}>
      <i className={i.text} style={{ color: clr }}></i>
    </a>
  ));

  return <div className='icons-container'>{icons}</div>;
};

export default IconContainer;
