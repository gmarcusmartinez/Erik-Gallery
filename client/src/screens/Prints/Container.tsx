import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IPrint } from 'interfaces';
import { PrintItem } from 'components/PrintItem';
import { LoadingCard } from 'components/CommonComponents/LoadingCard';

export const PrintsContainer = () => {
  const { loading, items } = useTypedSelector((state) => state.prints);

  const cards = [...Array(6)].map((_, i) => <LoadingCard key={i} i={i} />);
  const prints = items.map((p: IPrint) => <PrintItem key={p._id} item={p} />);

  return (
    <div className='prints-container'>
      {loading ? <>{cards}</> : <>{prints}</>}
    </div>
  );
};
