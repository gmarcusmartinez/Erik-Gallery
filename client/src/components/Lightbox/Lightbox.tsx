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
  const next = (e: any) => {
    e.stopPropagation();

    current === collection.length - 1
      ? setDisplayLightbox({ current: 0, isOpen: true })
      : setDisplayLightbox({ current: current + 1, isOpen: true });
  };

  const previous = (e: any) => {
    e.stopPropagation();

    current === 0
      ? setDisplayLightbox({ current: collection.length - 1, isOpen: true })
      : setDisplayLightbox({ current: current - 1, isOpen: true });
  };

  return ReactDOM.createPortal(
    <div
      className='lightbox'
      onClick={() => setDisplayLightbox({ current: '', isOpen: false })}
    >
      <div className='lightbox__body'>
        <i className='fas fa-chevron-left' onClick={(e) => previous(e)}></i>
        <img
          src={collection[current].small}
          alt='print'
          onClick={(e) => e.stopPropagation()}
        />
        <i className='fas fa-chevron-right' onClick={(e) => next(e)}></i>
      </div>
    </div>,
    document.querySelector('#lightbox')!
  );
};

export default Lightbox;
