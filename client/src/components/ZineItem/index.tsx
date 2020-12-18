import React from "react";
import { connect } from "react-redux";
import { IZine } from "interfaces";
import ViewProductBtn from "components/CommonComponents/ViewProductBtn";

import { toggleModal } from "store/actions/modal/toggleModal";
import { toggleCart } from "store/actions/cart";

interface IProps {
  item: IZine;
  toggleCart: Function;
  toggleModal: Function;
}

const ZineItem: React.FC<IProps> = (props) => {
  const { mainImage, quantityInStock, title, price } = props.item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  const toggleViewZine = () => {
    props.toggleCart(false);
    props.toggleModal(true, "VIEW_ITEM", props.item);
  };
  const togglePreview = () => {
    props.toggleCart(false);
    props.toggleModal(true, "PREVIEW_ZINE", props.item, true);
  };

  return (
    <div className="zine-item">
      <div className="zine-item__img" style={{ backgroundImage }}>
        <div className="zine-preview-btn__tablet" onClick={togglePreview}>
          Preview
        </div>
        <ViewProductBtn
          breakpoint="btn-tablet"
          quantityInStock={quantityInStock}
          toggleViewPrint={toggleViewZine}
        />
      </div>
      <p className="zine-item__title">{title}</p>
      <p className="zine-item__price">{price} &euro;</p>
      <div className="zine-preview-btn" onClick={togglePreview}>
        Preview
      </div>
      <ViewProductBtn
        quantityInStock={quantityInStock}
        toggleViewPrint={toggleViewZine}
      />
    </div>
  );
};

export default connect(null, { toggleCart, toggleModal })(ZineItem);
