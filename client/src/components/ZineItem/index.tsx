import React from 'react';
import { s3Url } from 'api/url';
import ZineAttrs from './ZineAttrs';

interface IProps {
  item: any;
}

const ZineItem: React.FC<IProps> = ({ item }) => {
  const { mainImage } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;

  return (
    <div className='zine-item'>
      <div className='zine-item__img' style={{ backgroundImage }} />
      <ZineAttrs item={item} />
    </div>
  );
};

export default ZineItem;
