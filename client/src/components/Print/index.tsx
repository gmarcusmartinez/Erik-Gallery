import React from "react";

interface IProps {
  print: {
    image: string;
    description: string;
    size: string;
  };
  index: number;
  setDisplayLightbox: Function;
}

const Print: React.FC<IProps> = ({ print, index, setDisplayLightbox }) => {
  return (
    <div className="print-item">
      <div
        className="print-item__img"
        style={{ backgroundImage: `url(${print.image})` }}
        onClick={() => setDisplayLightbox({ current: index, isOpen: true })}
      ></div>

      <p className="print-item__description">{print.description}</p>
      <p className="print-item__size">{print.size}</p>
    </div>
  );
};

export default Print;
