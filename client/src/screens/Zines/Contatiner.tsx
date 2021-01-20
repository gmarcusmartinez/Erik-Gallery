import React from 'react';
import ZinesList from './List';
import PrintsLoading from 'screens/Prints/Loading';
import { useTypedSelector } from 'hooks/use-typed-selector';

const ZinesContainer: React.FC = () => {
  const { loading } = useTypedSelector((state) => state.zines);
  return (
    <div className='zines-container'>
      {loading ? <PrintsLoading /> : <ZinesList />}
    </div>
  );
};

export default ZinesContainer;
