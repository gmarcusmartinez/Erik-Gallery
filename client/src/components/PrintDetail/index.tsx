import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { IPrint } from "interfaces";
import { selectModalData } from "store/selectors/modal";
import { Select } from "components/CustomInputs";
import { toggleModal } from "store/actions/modal/toggleModal";

interface IProps {
  print: IPrint;
  toggleModal: Function;
}

const PrintDetail: React.FC<IProps> = ({ print, toggleModal }) => {
  const { mainImage, description, size, quantityInStock } = print;
  const options = mapQuantityToOptions(quantityInStock);
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;
  const handleAddToCart = () => toggleModal(false, "", null);

  React.useEffect(() => {
    disableBodyScroll(document.querySelector(".main-content")!);
    return () => enableBodyScroll(document.querySelector(".main-content")!);
  }, []);

  return (
    <div className="print-detail">
      <div className="print-detail__img" style={{ backgroundImage }}></div>
      <div className="print-detail__info">
        <div className="print-detail__description">{description}</div>
        <p className="print-detail__size">{size}</p>
        <Select label="Select Quantity" options={options} />
        <div className="print-detail__btn" onClick={handleAddToCart}>
          Add to Cart
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ print: selectModalData });
export default connect(mapStateToProps, { toggleModal })(PrintDetail);

function mapQuantityToOptions(n: number) {
  const opts = [];
  for (let i = 0; i < n; i++) opts.push(n);
  return opts;
}
