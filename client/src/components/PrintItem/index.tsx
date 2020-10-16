import React from "react";
import { IPrint } from "interfaces";

interface IProps {
  print: IPrint;
}

const PrintItem: React.FC<IProps> = ({ print }) => {
  const { image, description, size } = print;
  return (
    <div className="print-item">
      <div
        className="print-item__img"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <p className="print-item__description">{description}</p>
      <p className="print-item__size">{size}</p>
    </div>
  );
};

export default PrintItem;
