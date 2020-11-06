import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IPrint } from "interfaces";
import { toggleModal } from "store/actions/modal/toggleModal";
import { deletePrint } from "store/actions/prints/deletePrint";
import { selectModalData } from "store/selectors/modal";

interface IProps {
  data: IPrint;
  deletePrint: Function;
  toggleModal: Function;
}
const PrintDelete: FC<IProps> = ({ data, deletePrint, toggleModal }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deletePrint(data._id);
    toggleModal(false, null);
  };

  const imageUrl = `https://erik-gallery.s3-us-west-1.amazonaws.com/${data.mainImage}`;

  return (
    <div className="print-delete">
      <form onSubmit={handleSubmit}>
        <h3 className="print-delete__title">
          Are you sure you want to delete this print?
        </h3>
        <img className="print-delete__image" src={imageUrl} alt="print" />
        <button className="print-delete__btn">Delete</button>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ data: selectModalData });
export default connect(mapStateToProps, { deletePrint, toggleModal })(
  PrintDelete
);
