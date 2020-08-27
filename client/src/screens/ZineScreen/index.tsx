import React from 'react';
import { items } from './data';
import Flipbook from 'components/Flipbook';

const arr = [1, 2, 3, 4, 5, 6, 7];

const ZineScreen: React.FC = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  let list = items.map((i, index) => (
    <img
      onClick={() => setSelectedItem(index)}
      className={`zine-img ${selectedItem === index ? 'current' : ''}`}
      key={index}
      src={i.small}
      alt='zine'
    />
  ));
  return (
    <div className='zines'>
      <div className='zines__content'>
        <div className='selected-item'>
          {/* <img
            src={items[selectedItem].small}
            alt='zine'
            className='selected-item_img'
          /> */}
        </div>
        {/* <div className='zines__flipbook'>{list}</div> */}
      </div>
    </div>
  );
};

export default ZineScreen;
