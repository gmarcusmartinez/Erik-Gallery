import React from 'react';
import ReactDOM from 'react-dom';

interface LightboxProps {
  setDisplayLightbox: Function;
}
const Lightbox: React.FC<LightboxProps> = ({ setDisplayLightbox }) => {
  return ReactDOM.createPortal(
    <div className='lightbox' onClick={() => setDisplayLightbox(false)}>
      <div
        className='lightbox__body'
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>,
    document.querySelector('#lightbox')!
  );
};

export default Lightbox;
