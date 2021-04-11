import React from 'react';
import { IPrint } from 'interfaces';
import { s3Url } from 'api/url';
import { useActions } from 'hooks/use-actions';

export const PrintItem = ({ item }: { item: IPrint }) => {
  const { mainImage, isAvailable } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;
  const className = `print-item__img ${isAvailable ? '' : 'sold-out'}`;
  const { toggleModal } = useActions();

  const handleToggleModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    toggleModal(true, 'VIEW_ITEM', item);
  };
  return (
    <div className='print-item' onClick={handleToggleModal}>
      <div className={className} style={{ backgroundImage }} />
      <div className='print-item__sold'>{`${isAvailable ? '' : 'sold'}`}</div>
      <div className='item-attrs'>
        <div className='item-attrs__wrapper'>
          <p style={{ fontWeight: 700 }}>{item.description}</p>
          <p>{item.size}</p>
          <div className='item-attrs__btn'>View</div>
        </div>
      </div>
    </div>
  );
};
