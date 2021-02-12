import React from 'react';
import ReactDOM from 'react-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { s3Url } from 'api/url';

const Lightbox: React.FC = () => {
  const [current, setCurrent] = React.useState(0);
  const { images, display, index } = useTypedSelector(
    ({ lightbox }) => lightbox
  );
  const { toggleLightbox } = useActions();

  const prev = () => {
    const previous = current === 0 ? images.length - 1 : current - 1;
    setCurrent(previous);
  };
  const next = () => {
    const next = current === images.length - 1 ? 0 : current + 1;
    setCurrent(next);
  };
  React.useEffect(() => {
    setCurrent(index);
  }, [index]);

  return ReactDOM.createPortal(
    <div className={`lightbox ${display ? 'lb-open' : 'lb-closed'}`}>
      {renderCloseBtn(display, toggleLightbox, index)}
      {display ? (
        <div
          className='lightbox__image'
          style={{ backgroundImage: `url(${s3Url}/${images[current]})` }}
        />
      ) : null}
      <div className='lightbox__btns'>
        <div onClick={() => prev()}>
          <i className='fas fa-angle-left'></i>
        </div>
        <div onClick={() => next()}>
          <i className='fas fa-angle-right'></i>
        </div>
      </div>
    </div>,
    document.querySelector('#lightbox')!
  );
};

export default Lightbox;

const renderCloseBtn = (bool: boolean, cb: Function, i: number) => (
  <div className='lightbox__close-btn' onClick={() => cb(false, [], i)}>
    <div className={`lightbox__bar ${bool ? 'cross' : ''}`}></div>
    <div className={`lightbox__bar ${bool ? 'cross' : ''}`}></div>
    <div className={`lightbox__bar ${bool ? 'cross' : ''}`}></div>
  </div>
);
