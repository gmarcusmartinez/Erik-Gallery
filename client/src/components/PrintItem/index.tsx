import React from "react";
import { connect } from "react-redux";

import CustomButton from "components/CustomButton";
import { IPrint } from "interfaces";
import { addItem } from "store/actions/cart";

interface IProps {
  item: IPrint;
  addItem: Function;
}

const PrintItem: React.FC<IProps> = ({ item, addItem }) => {
  const { image, description, size } = item;
  return (
    <div className="print-item">
      <div
        className="print-item__img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <p className="print-item__description">{description}</p>
      <p className="print-item__size">{size}</p>
      <CustomButton margin="1rem 0" onClick={() => addItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(PrintItem);
