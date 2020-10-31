import React from "react";

interface IProps {
  print: any;
}

const PrintItem: React.FC<IProps> = ({ print }) => {
  return (
    <div className="dash-print-item">
      <img className="dash-print-item__img" src={print.image} alt="print" />
      <div className="dash-print-item__text tablet-field">
        {print.description}
      </div>
      <div className="dash-print-item__text tablet-field">{print.size}</div>
      <div className="dash-print-item__text tablet-field">
        {String(print.price)}
      </div>
      <div className="dash-print-item__text tablet-field">
        {print.inStock ? "√" : "-"}
      </div>
      <div className="dash-print-item__text edit">&#9998;</div>
      <div className="dash-print-item__text delete">&times;</div>
    </div>
  );
};

export default PrintItem;
