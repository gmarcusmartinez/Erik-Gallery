import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IPrint } from 'interfaces';
import PrintItem from 'components/PrintItem';

const PrintsContainer = () => {
  const { loading, items } = useTypedSelector((state) => state.prints);

  return (
    <div className='prints-container'>
      {loading ? (
        <>
          {[...Array(6)].map(() => (
            <div className='loading-print-card'>
              <div className='loading-print-card__img shine'></div>
              <div className='loading-print-card__details shine'></div>
              <div className='loading-print-card__size shine'></div>
            </div>
          ))}
        </>
      ) : (
        items.map((p: IPrint) => <PrintItem key={p._id} item={p} />)
      )}
    </div>
  );
};

export default PrintsContainer;
