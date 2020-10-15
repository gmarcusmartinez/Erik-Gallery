import React from "react";

interface IProps {
  print: {
    image: string;
    description: string;
    size: string;
  };
}

const Print: React.FC<IProps> = ({ print }) => {
  return (
    <div className="print-item">
      <div
        className="print-item__img"
        style={{ backgroundImage: `url(${print.image})` }}
      ></div>

      <p className="print-item__description">{print.description}</p>
      <p className="print-item__size">{print.size}</p>
    </div>
  );
};

export default Print;
