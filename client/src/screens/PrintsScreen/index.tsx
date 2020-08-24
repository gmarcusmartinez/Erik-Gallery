import React from 'react';
import { prints } from './data';
import Lightbox from 'components/Lightbox/Lightbox';
import Print from 'components/Print';

const PrintsScreen: React.FC = () => {
  const [displayLightbox, setDisplayLightbox] = React.useState({
    current: 0,
    isOpen: false,
  });

  let list = prints.map((p, index) => (
    <Print p={p} index={index} setDisplayLightbox={setDisplayLightbox} />
  ));

  const renderLightbox = () =>
    displayLightbox.isOpen ? (
      <Lightbox
        setDisplayLightbox={setDisplayLightbox}
        current={displayLightbox.current}
        collection={prints}
      />
    ) : null;

  return (
    <div className='prints'>
      {list}
      {renderLightbox()}
    </div>
  );
};
export default PrintsScreen;
