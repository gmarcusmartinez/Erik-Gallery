import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IPrint } from "interfaces";
import { selectModalData } from "store/selectors/modal";
import { Select } from "components/CustomInputs";
import { addItemToCart } from "store/actions/cart";
import { mapQuantityToOptions } from "utils";

interface IProps {
  addItemToCart: Function;
  print: IPrint;
}

const PrintDetail: FC<IProps> = ({ print, addItemToCart }) => {
  const { mainImage, description, size, quantityInStock } = print;
  const [qty, setQty] = React.useState(1);

  const options = mapQuantityToOptions(quantityInStock);
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setQty(+e.target.value);

  const handleAddToCart = (item: IPrint, qty: Number) => {
    const cartItem = { ...item, quantity: qty };
    addItemToCart(cartItem);
  };

  return (
    <div className="print-detail">
      <div className="print-detail__img" style={{ backgroundImage }}></div>
      <div className="print-detail__info">
        <div className="print-detail__description">{description}</div>
        <p className="print-detail__size">{size}</p>

        <Select
          label="Select Quantity"
          name="qty"
          value={qty}
          onChange={handleChange}
          options={options}
        />

        <div
          className="print-detail__btn"
          onClick={() => handleAddToCart(print, qty)}
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ print: selectModalData });
export default connect(mapStateToProps, { addItemToCart })(PrintDetail);
