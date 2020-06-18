import React from 'react';
import { items } from './data';
import Lightbox from '../../components/Lightbox/Lightbox';

const ZineScreen: React.FC = () => {
  const [displayLightbox, setDisplayLightbox] = React.useState({
    current: 0,
    isOpen: false,
  });
  let list = items.map((i, index) => (
    <img
      key={index}
      src={i.small}
      alt='zine'
      className='zine-item'
      onClick={() => setDisplayLightbox({ current: index, isOpen: true })}
    />
  ));
  return (
    <div className='zines'>
      {list}
      {displayLightbox.isOpen ? (
        <Lightbox
          setDisplayLightbox={setDisplayLightbox}
          current={displayLightbox.current}
          collection={items}
        />
      ) : null}
    </div>
  );
};

export default ZineScreen;
