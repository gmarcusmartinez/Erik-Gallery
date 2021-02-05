import React from 'react';
import { IPrint } from 'interfaces';
import { s3Url } from 'api/url';
import { useActions } from 'hooks/use-actions';
import ItemAttrs from './ItemAttrs';

interface IProps {
  item: IPrint;
}

const PrintItem: React.FC<IProps> = ({ item }) => {
  const { mainImage } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;
  const { toggleModal } = useActions();

  const handleToggleModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    toggleModal(true, 'VIEW_ITEM', item);
  };
  return (
    <div className='print-item' onClick={handleToggleModal}>
      <div className='print-item__img' style={{ backgroundImage }} />
      <ItemAttrs item={item} />
    </div>
  );
};

export default PrintItem;
