import React from 'react';

const mediaIcons = [
  {
    text: 'fab fa-instagram',
    to: 'https://www.instagram.com/1000bodies/',
  },
  {
    text: 'fab fa-facebook-square',
    to: 'https://www.facebook.com/1000bodies/',
  },
  {
    text: 'fab fa-soundcloud',
    to: 'https://soundcloud.com/1000bodies',
  },
];

const icons = mediaIcons.map((i: any, index) => (
  <a href={i.to} target='blank'>
    <i key={index} className={i.text}></i>
  </a>
));
const IconContainer = () => {
  return <div className='icons-container'>{icons}</div>;
};

export default IconContainer;
