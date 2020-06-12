import React from 'react';
import ReactDOM from 'react-dom';

interface LightboxProps {
  setDisplayLightbox: Function;
  current: number;
  collection: { small: string }[];
}
const Lightbox: React.FC<LightboxProps> = ({
  setDisplayLightbox,
  current,
  collection,
}) => {
  const next = () => {
    current === collection.length - 1
      ? setDisplayLightbox({ current: 0, isOpen: true })
      : setDisplayLightbox({ current: current + 1, isOpen: true });
  };
  const previous = () => {
    current === 0
      ? setDisplayLightbox({ current: collection.length - 1, isOpen: true })
      : setDisplayLightbox({ current: current - 1, isOpen: true });
  };
  return ReactDOM.createPortal(
    <div
      className='lightbox'
      onClick={() => setDisplayLightbox({ current: '', isOpen: false })}
    >
      <div className='lightbox__body' onClick={(e) => e.stopPropagation()}>
        <i className='fas fa-chevron-left' onClick={() => previous()}></i>
        <img src={collection[current].small} alt='print' />
        <i className='fas fa-chevron-right' onClick={() => next()}></i>
      </div>
    </div>,
    document.querySelector('#lightbox')!
  );
};

export default Lightbox;
