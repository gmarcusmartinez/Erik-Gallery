import React from 'react';
import { s3Url } from 'api/url';
import { ICartItem } from 'interfaces';

interface IProps {
  c: ICartItem;
}
const ReviewOrderItem: React.FC<IProps> = ({ c }) => {
  const backgroundImage = `url(${s3Url}/${c.mainImage})`;
  const total = c.quantity * +c.price;
  const classPrefix = 'review-order__item__';

  const { description, title } = c;
  const text = description ? description : title;

  return (
    <div className='review-order__item' key={c._id}>
      <div className={`${classPrefix}img`} style={{ backgroundImage }}></div>
      <span className={`${classPrefix}desc`}>{text}</span>
      <span className={`${classPrefix}price`}>
        {c.quantity} x {c.price} = {total}&#8364;
      </span>
    </div>
  );
};

export default ReviewOrderItem;
