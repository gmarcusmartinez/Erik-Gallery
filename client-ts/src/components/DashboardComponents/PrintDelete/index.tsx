import React from "react";
import { connect } from "react-redux";
import { deletePrintsStart } from "store/actions/prints/index";
import { toggleModal } from "store/actions/modal/toggleModal";

interface IProps {
  id?: string;
  deletePrintsStart: Function;
  toggleModal: Function;
}

const PrintDelete: React.FC<IProps> = ({
  deletePrintsStart,
  toggleModal,
  id,
}) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deletePrintsStart(id);
    toggleModal(false, null);
  };
  return (
    <div className="print-delete">
      <form onSubmit={handleSubmit}>
        <h3 className="print-delete__title">
          Are you sure you want to delete this print?
        </h3>
        <button className="print-delete__btn">Delete</button>
      </form>
    </div>
  );
};

export default connect(null, { deletePrintsStart, toggleModal })(PrintDelete);
