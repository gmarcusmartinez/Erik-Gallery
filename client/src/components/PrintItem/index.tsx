import AddToCartBtn from "components/AddToCartBtn";
import React from "react";
import { IPrint } from "../../interfaces";

interface IProps {
  item: IPrint;
}

const PrintItem: React.FC<IProps> = ({ item }) => {
  const { mainImage, description, size, quantityInStock } = item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  return (
    <div className="print-item">
      <div className="print-item__img" style={{ backgroundImage }}>
        <AddToCartBtn
          breakpoint="btn-tablet"
          quantityInStock={quantityInStock}
        />
      </div>
      <p className="print-item__description">{description}</p>
      <p className="print-item__size">{size}</p>
      <AddToCartBtn quantityInStock={quantityInStock} />
    </div>
  );
};

export default PrintItem;
