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

  const { toggleLightbox } = useActions();
  const handleToggleLightbox = () => toggleLightbox(true, backgroundImage);

  return (
    <div className='item-attrs'>
      <div className='item-attrs__wrapper' onClick={handleToggleLightbox}>
        <p>{item.description}</p>
        <p>{item.size}</p>
      </div>
    </div>
  );
};

export default ItemAttrs;
