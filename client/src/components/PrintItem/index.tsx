import React from "react";
import { IPrint } from "../../interfaces";

interface IProps {
  item: IPrint;
}

const PrintItem: React.FC<IProps> = ({ item }) => {
  const { image, description, size } = item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${image})`;

  return (
    <div className="print-item">
      <div className="print-item__img" style={{ backgroundImage }}>
        <button className="print-item__btn tablet">Add To Cart</button>
      </div>
      <p className="print-item__description">{description}</p>
      <p className="print-item__size">{size}</p>
      <button className="print-item__btn mobile">Add To Cart</button>
    </div>
  );
};

export default PrintItem;
