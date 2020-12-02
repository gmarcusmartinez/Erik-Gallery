import React from "react";
import { ICartItem } from "interfaces";

interface IProps {
  c: ICartItem;
}
const ReviewOrderItem: React.FC<IProps> = ({ c }) => {
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${c.mainImage})`;
  const total = c.quantity * +c.price;

  return (
    <div className="review-order__item" key={c._id}>
      <div
        className="review-order__item__img"
        style={{ backgroundImage }}
      ></div>
      <span className="review-order__item__desc">{c.description}</span>
      <span className="review-order__item__price">
        {c.quantity} x {c.price} = {total}&#8364;
      </span>
    </div>
  );
};

export default ReviewOrderItem;
