import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { IPrint } from "interfaces";
import { selectModalData } from "store/selectors/modal";
import { Select } from "components/CustomInputs";
import { toggleModal } from "store/actions/modal/toggleModal";
import { addItemToCart, toggleCart } from "store/actions/cart";

interface IProps {
  addItemToCart: Function;
  print: IPrint;
  toggleCart: Function;
  toggleModal: Function;
}

const PrintDetail: FC<IProps> = ({
  print,
  toggleCart,
  toggleModal,
  addItemToCart,
}) => {
  const { mainImage, description, size, quantityInStock } = print;
  const [qty, setQty] = React.useState(1);

  const options = mapQuantityToOptions(quantityInStock);
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setQty(+e.target.value);

  const handleAddToCart = (item: IPrint, qty: Number) => {
    toggleModal(false, "", null);
    const cartItem = { ...item, quantity: qty };
    addItemToCart(cartItem);
    toggleCart(true);
  };

  React.useEffect(() => {
    disableBodyScroll(document.querySelector(".main-content")!);
    enableBodyScroll(document.querySelector(".print-detail")!);

    return () => {
      enableBodyScroll(document.querySelector(".main-content")!);
    };
  }, []);

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
          elHeight="15%"
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

export default connect(mapStateToProps, {
  toggleCart,
  toggleModal,
  addItemToCart,
})(PrintDetail);

function mapQuantityToOptions(n: number) {
  const opts = [];
  for (let i = 1; i <= n; i++) opts.push(i);
  return opts;
}
