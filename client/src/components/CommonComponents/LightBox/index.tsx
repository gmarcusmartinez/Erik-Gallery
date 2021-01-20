import React from 'react';
import ReactDOM from 'react-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

const Lightbox: React.FC = () => {
  const { toggleLightbox } = useActions();
  const { backgroundImage, display } = useTypedSelector(
    ({ lightbox }) => lightbox
  );

  return ReactDOM.createPortal(
    <div className={`lightbox ${display ? 'lb-open' : 'lb-closed'}`}>
      {renderCloseBtn(display, toggleLightbox)}
      <div className='lightbox__image' style={{ backgroundImage }} />
    </div>,
    document.querySelector('#lightbox')!
  );
};

export default Lightbox;

const renderCloseBtn = (bool: boolean, cb: Function) => (
  <div className='lightbox__close-btn' onClick={() => cb(false)}>
    <div className={`lightbox__bar ${bool ? 'cross' : ''}`}></div>
    <div className={`lightbox__bar ${bool ? 'cross' : ''}`}></div>
    <div className={`lightbox__bar ${bool ? 'cross' : ''}`}></div>
  </div>
);
