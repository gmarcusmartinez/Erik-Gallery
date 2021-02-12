import React from 'react';
import ReactDOM from 'react-dom';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { s3Url } from 'api/url';

const Lightbox = () => {
  const [current, setCurrent] = React.useState(0);
  const { toggleLightbox } = useActions();
  const { images, display, index } = useTypedSelector(
    (state) => state.lightbox
  );
  const last = images.length - 1;
  const prev = () => setCurrent(current === 0 ? last - 1 : current - 1);
  const next = () => setCurrent(current === last ? 0 : current + 1);
  const handleCloseLightbox = () => toggleLightbox(false, [], current);

  React.useEffect(() => {
    setCurrent(index);
  }, [index]);

  const list = images.map((imgUrl: string, i) => {
    const backgroundImage = `url(${s3Url}/${imgUrl})`;
    return (
      <div key={i} className='lightbox__image' style={{ backgroundImage }} />
    );
  });

  return ReactDOM.createPortal(
    <div className={`lightbox ${display ? 'lb-open' : 'lb-closed'}`}>
      <div className='lightbox__close-btn' onClick={handleCloseLightbox}>
        <div className={`${display && 'cross'}`} />
        <div className={`${display && 'cross'}`} />
        <div className={`${display && 'cross'}`} />
      </div>
      <div className='lightbox__images'>{list}</div>
      {display && (
        <div className='selected-lightbox-image'>{list[current]}</div>
      )}
      <div className='lightbox__btns'>
        <i className='fas fa-angle-left' onClick={prev}></i>
        <i className='fas fa-angle-right' onClick={next}></i>
      </div>
    </div>,
    document.querySelector('#lightbox')!
  );
};

export default Lightbox;
