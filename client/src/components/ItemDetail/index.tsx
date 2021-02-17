import React from 'react';
import { s3Url } from 'api/url';
import { useTypedSelector } from 'hooks/use-typed-selector';

const ItemDetail = () => {
  const { data } = useTypedSelector(({ modal }) => modal);
  const { description, size, mainImage, isAvailable } = data!;
  const backgroundImage = `url(${s3Url}/${mainImage})`;

  return (
    <div className='item-detail'>
      <div className='item-detail__img' style={{ backgroundImage }} />
      <div className='item-detail__info'>
        <p>{description}</p>
        <p>{size}</p>
        {isAvailable ? (
          <p className='item-detail__placeholder'>
            If intrested in purchasing email:
            <a href='mailto: erik.felfalusi@gmail.com<'>
              erik.felfalusi@gmail.com
            </a>
          </p>
        ) : (
          <div className='item-detail__sold'>Sold</div>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
