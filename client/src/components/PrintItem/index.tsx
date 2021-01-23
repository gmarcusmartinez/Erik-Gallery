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
  const { toggleLightbox } = useActions();
  const handleToggleLightbox = () => toggleLightbox(true, backgroundImage);

  return (
    <div className='print-item'>
      <div
        className='print-item__img'
        style={{ backgroundImage }}
        onClick={handleToggleLightbox}
      />
      <ItemAttrs item={item} />
    </div>
  );
};

export default PrintItem;
