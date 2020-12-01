import React, { FC } from "react";
import ViewProductBtn from "components/CommonComponents/ViewProductBtn";
import { connect } from "react-redux";
import { IPrint } from "interfaces";

import { toggleLightbox } from "store/actions/lightbox/toggleLightbox";
import { toggleModal } from "store/actions/modal/toggleModal";
import { toggleCart } from "store/actions/cart";

interface IProps {
  item: IPrint;
  toggleLightbox: Function;
  toggleModal: Function;
  toggleCart: Function;
}

const PrintItem: FC<IProps> = ({
  item,
  toggleCart,
  toggleLightbox,
  toggleModal,
}) => {
  const { mainImage, description, size, quantityInStock } = item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  const handleToggleLightbox = () => toggleLightbox(true, backgroundImage);

  const toggleViewPrint = () => {
    toggleCart(false);
    toggleModal(true, "VIEW_PRINT", item);
  };

  return (
    <div className="print-item" onClick={handleToggleLightbox}>
      <div className="print-item__img" style={{ backgroundImage }}>
        <ViewProductBtn
          breakpoint="btn-tablet"
          quantityInStock={quantityInStock}
          toggleViewPrint={toggleViewPrint}
        />
      </div>
      <p className="print-item__description">{description}</p>
      <p className="print-item__size">{size}</p>
      <ViewProductBtn
        quantityInStock={quantityInStock}
        toggleViewPrint={toggleViewPrint}
      />
    </div>
  );
};

export default connect(null, { toggleCart, toggleLightbox, toggleModal })(
  PrintItem
);
