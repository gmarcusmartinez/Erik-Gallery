import React from "react";
import { IZine } from "interfaces";

interface IProps {
  item: IZine;
}

const ZineItem: React.FC<IProps> = (props) => {
  const { mainImage } = props.item;
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${mainImage})`;

  return (
    <div className="zine-item">
      <div className="zine-item__img" style={{ backgroundImage }}></div>
    </div>
  );
};

export default ZineItem;
