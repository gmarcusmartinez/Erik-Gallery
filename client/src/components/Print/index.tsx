import React from 'react';

interface IPrint {
  p: {
    small: string;
    description: string;
    size: string;
  };
  index: number;
  setDisplayLightbox: Function;
}

const Print: React.FC<IPrint> = ({ p, index, setDisplayLightbox }) => {
  return (
    <div className='print-item'>
      <div
        className='print-item__img'
        style={{ backgroundImage: `url(${p.small})` }}
        onClick={() => setDisplayLightbox({ current: index, isOpen: true })}
      ></div>

      <p className='print-item__description'>{p.description}</p>
      <p className='print-item__size'>{p.size}</p>
    </div>
  );
};

export default Print;
