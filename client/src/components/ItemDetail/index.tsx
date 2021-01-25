import React from 'react';
import { s3Url } from 'api/url';
import { useTypedSelector } from 'hooks/use-typed-selector';
import PlaceHolder from './PlaceHolder';

const ItemDetail = () => {
  const { data } = useTypedSelector(({ modal }) => modal);
  const { description, title, mainImage } = data!;
  const backgroundImage = `url(${s3Url}/${mainImage})`;

  return (
    <div className='item-detail'>
      <div className='item-detail__img' style={{ backgroundImage }} />
      <div className='item-detail__info'>
        {description && <p>{description}</p>}
        {title && <p>{title}</p>}
        <p>{data.size ? data.size : null}</p>
        <PlaceHolder />
      </div>
    </div>
  );
};

export default ItemDetail;
