import React from "react";
import { IPrint } from "../../interfaces";

interface IProps {
  item: IPrint;
}

const PrintItem: React.FC<IProps> = ({ item }) => {
  const { mainImage, description, size } = item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  return (
    <div className="print-item">
      <div className="print-item__img" style={{ backgroundImage }}>
        <div className="print-item__btn tablet">Add To Cart</div>
      </div>
      <p className="print-item__description">{description}</p>
      <p className="print-item__size">{size}</p>
      <div className="print-item__btn mobile">Add To Cart</div>
    </div>
  );
};

export default PrintItem;
