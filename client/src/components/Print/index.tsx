import React from 'react';

interface IPrint {
  p: {
    small: string;
  };
  index: number;
  setDisplayLightbox: Function;
}

const Print: React.FC<IPrint> = ({ p, index, setDisplayLightbox }) => {
  return (
    <div>
      <img
        src={p.small}
        alt='print'
        className='print-item'
        onClick={() => setDisplayLightbox({ current: index, isOpen: true })}
      />
    </div>
  );
};

export default Print;
