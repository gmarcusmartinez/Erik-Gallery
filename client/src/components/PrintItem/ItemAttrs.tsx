import React from 'react';
import { IPrint } from 'interfaces';

interface IProps {
  item: IPrint;
}

const ItemAttrs: React.FC<IProps> = ({ item }) => {
  return (
    <div className='item-attrs'>
      <div className='item-attrs__wrapper'>
        <p>{item.description}</p>
        <p>{item.size}</p>
        <div className='item-attrs__btn'>View Print</div>
      </div>
    </div>
  );
};

export default ItemAttrs;
