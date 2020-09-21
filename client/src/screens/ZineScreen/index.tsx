import React from 'react';
import { zine } from './data';
import Zine from 'components/Zine';

const ZineScreen: React.FC = () => {
  return (
    <div className='zines'>
      <div className='zines__content'>
        <Zine zine={zine} />
      </div>
    </div>
  );
};

export default ZineScreen;
