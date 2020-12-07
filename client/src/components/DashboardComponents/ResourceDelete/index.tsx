import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IPrint, IZine } from "interfaces";
import { toggleModal } from "store/actions/modal/toggleModal";
import { deletePrint } from "store/actions/prints/deletePrint";
import { deleteZine } from "store/actions/zines/deleteZine";
import { deleteBackground } from "store/actions/backgrounds";
import { selectModalData } from "store/selectors/modal";

interface IProps {
  data: IPrint | IZine;
  deleteBackground: Function;
  deletePrint: Function;
  deleteZine: Function;
  toggleModal: Function;
}
const ResourceDelete: FC<IProps> = (props) => {
  const handleClick = async (type: string) => {
    props.toggleModal(false, null);
    switch (type) {
      case "background":
        return props.deleteBackground(props.data._id);
      case "print":
        return props.deletePrint(props.data._id);
      case "zine":
        return props.deleteZine(props.data._id);
    }
  };

  const imageUrl = `https://erik-gallery.s3-us-west-1.amazonaws.com/${props.data.mainImage}`;

  return (
    <div className="resource-delete">
      <h3 className="resource-delete__title">
        Are you sure you want to delete this {props.data.type}?
      </h3>
      <img className="resource-delete__image" src={imageUrl} alt="resource" />
      <div
        className="resource-delete__btn"
        onClick={() => handleClick(props.data.type)}
      >
        Delete
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ data: selectModalData });

export default connect(mapStateToProps, {
  deleteBackground,
  deletePrint,
  deleteZine,
  toggleModal,
})(ResourceDelete);
