import React, { FC } from "react";
import AddToCartBtn from "components/AddToCartBtn";
import { connect } from "react-redux";
import { IPrint } from "interfaces";
import { toggleLightbox } from "store/actions/lightbox/toggleLightbox";

interface IProps {
  item: IPrint;
  toggleLightbox: Function;
}

const PrintItem: FC<IProps> = ({ item, toggleLightbox }) => {
  const { mainImage, description, size, quantityInStock } = item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;
  const handleToggleLightbox = () => toggleLightbox(true, backgroundImage);

  return (
    <div className="print-item" onClick={handleToggleLightbox}>
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

export default connect(null, { toggleLightbox })(PrintItem);
