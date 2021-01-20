import React from 'react';
import { useTypedSelector } from 'hooks/use-typed-selector';
import PrintsList from './List';
import PrintsLoading from './Loading';

const PrintsContainer: React.FC = () => {
  const { loading } = useTypedSelector((state) => state.prints);
  return (
    <div className='prints-container'>
      {loading ? <PrintsLoading /> : <PrintsList />}
    </div>
  );
};

export default PrintsContainer;
