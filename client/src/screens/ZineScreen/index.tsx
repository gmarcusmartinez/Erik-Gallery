import React from 'react';
import { zine } from './data';
import Flipbook from 'components/Flipbook';

const ZineScreen: React.FC = () => {
  return (
    <div className='zines'>
      <div className='zines__content'>
        <Flipbook zine={zine} />
      </div>
    </div>
  );
};

export default ZineScreen;
