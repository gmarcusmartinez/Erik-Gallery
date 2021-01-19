import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IPrint, IZine } from "interfaces";
import { selectModalData } from "store/selectors/modal";
import { addItemToCart } from "store/actions/cart";
import { s3Url } from "api/url";

interface IProps {
  item: IPrint | IZine;
}

const ItemDetail: FC<IProps> = ({ item }) => {
  const { description, title, mainImage, price } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;

  const vatIncludeded = (
    <span style={{ fontSize: "1rem", marginLeft: "0.5rem" }}>
      (VAT Included)
    </span>
  );

  return (
    <div className="item-detail">
      <div className="item-detail__img" style={{ backgroundImage }} />
      <div className="item-detail__info">
        {description && <p className="item-detail__text">{description}</p>}
        {title && <p className="item-detail__text">{title}</p>}
        <p className="item-detail__text">
          {price}&euro;{vatIncludeded}
        </p>
        <p className="item-detail__text">{item.size ? item.size : null}</p>
        <p className="item-detail__placeholder">
          If intrested in purchasing email:
          <a href="mailto: erik.felfalusi@gmail.com<">
            erik.felfalusi@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ item: selectModalData });
export default connect(mapStateToProps, { addItemToCart })(ItemDetail);

// const [qty, setQty] = React.useState(1);
// const options = mapQuantityToOptions(quantityInStock);
// const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
//   setQty(+e.target.value);
// const handleAddToCart = (item: IPrint | IZine, qty: Number) => {
//   const cartItem = { ...item, quantity: qty };
//   addItemToCart(cartItem);
// };

{
  /* <Select
          label="Select Quantity"
          name="qty"
          value={qty}
          onChange={handleChange}
          options={options}
        /> */
}
{
  /* <div
          className="item-detail__btn"
          onClick={() => handleAddToCart(item, qty)}
        >
          Add to Cart
        </div> */
}
