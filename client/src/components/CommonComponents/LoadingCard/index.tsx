import React from 'react';

export const LoadingCard = ({ i }: { i: number }) => {
  return (
    <div key={i} className='loading-print-card'>
      <div className='loading-print-card__img shine'></div>
      <div className='loading-print-card__size shine'></div>
    </div>
  );
};
