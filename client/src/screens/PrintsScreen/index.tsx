import React from 'react';
import { prints } from './data';
import Lightbox from '../../components/Lightbox/Lightbox';

const PrintsScreen: React.FC = () => {
  const [displayLightbox, setDisplayLightbox] = React.useState({
    current: 0,
    isOpen: false,
  });

  let list = prints.map((p, index) => (
    <img
      key={index}
      src={p.small}
      alt='print'
      className='print-item'
      onClick={() => setDisplayLightbox({ current: index, isOpen: true })}
    />
  ));
  return (
    <div className='prints'>
      {list}
      {displayLightbox.isOpen ? (
        <Lightbox
          setDisplayLightbox={setDisplayLightbox}
          current={displayLightbox.current}
          collection={prints}
        />
      ) : null}
    </div>
  );
};
export default PrintsScreen;
