import React from 'react';
import { prints } from './data';
import Lightbox from '../../components/Lightbox/Lightbox';
interface PrintScreenProps {}

const PrintsScreen: React.FC<PrintScreenProps> = () => {
  const [displayLightbox, setDisplayLightbox] = React.useState(false);

  let list = prints.map((p, index) => (
    <img
      key={index}
      src={p.small}
      alt='print'
      className='print-item'
      onClick={() => setDisplayLightbox(true)}
    />
  ));
  return (
    <div className='prints'>
      {list}
      {displayLightbox ? (
        <Lightbox setDisplayLightbox={setDisplayLightbox} />
      ) : null}
    </div>
  );
};
export default PrintsScreen;
