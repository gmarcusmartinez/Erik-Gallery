import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IPrint, IZine } from "interfaces";
import { selectModalData } from "store/selectors/modal";
import { Select } from "components/CustomInputs";
import { addItemToCart } from "store/actions/cart";
import { mapQuantityToOptions } from "utils";

interface IProps {
  addItemToCart: Function;
  item: IPrint | IZine;
}

const ItemDetail: FC<IProps> = ({ item, addItemToCart }) => {
  const { description, title, mainImage, price, quantityInStock } = item;

  const [qty, setQty] = React.useState(1);

  const options = mapQuantityToOptions(quantityInStock);
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setQty(+e.target.value);

  const handleAddToCart = (item: IPrint | IZine, qty: Number) => {
    const cartItem = { ...item, quantity: qty };
    addItemToCart(cartItem);
  };
  const vatIncludeded = (
    <span style={{ fontSize: "1rem", marginLeft: "0.5rem" }}>
      (VAT Included)
    </span>
  );

  return (
    <div className="print-detail">
      <div className="print-detail__img" style={{ backgroundImage }}></div>
      <div className="print-detail__info">
        {description && <p className="print-detail__text">{description}</p>}
        {title && <p className="print-detail__text">{title}</p>}
        <p className="print-detail__text">
          {price}&euro;{vatIncludeded}
        </p>
        <p className="print-detail__text">{item.size ? item.size : null}</p>
        <Select
          label="Select Quantity"
          name="qty"
          value={qty}
          onChange={handleChange}
          options={options}
        />
        <div
          className="print-detail__btn"
          onClick={() => handleAddToCart(item, qty)}
        >
          Add to Cart
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ item: selectModalData });
export default connect(mapStateToProps, { addItemToCart })(ItemDetail);
