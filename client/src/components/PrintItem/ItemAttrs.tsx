import React from 'react';
import { s3Url } from 'api/url';
import { IPrint } from 'interfaces';
import { useActions } from 'hooks/use-actions';

interface IProps {
  item: IPrint;
}

const ItemAttrs: React.FC<IProps> = ({ item }) => {
  const { mainImage } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;

  const { toggleLightbox, toggleModal } = useActions();
  const handleToggleLightbox = () => toggleLightbox(true, backgroundImage);

  const handleToggleModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    toggleModal(true, 'VIEW_ITEM', item);
  };

  return (
    <div className='item-attrs'>
      <div className='item-attrs__wrapper' onClick={handleToggleLightbox}>
        <p>{item.description}</p>
        <p>{item.size}</p>
        <div className='item-attrs__btn' onClick={(e) => handleToggleModal(e)}>
          View Product
        </div>
      </div>
    </div>
  );
};

export default ItemAttrs;
