import React from "react";
import { connect } from "react-redux";
import { toggleModal } from "store/actions/modal/toggleModal";

interface IProps {
  toggleModal: Function;
}

const PrintAdd: React.FC<IProps> = ({ toggleModal }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleModal(false, null, null);
  };
  return (
    <div className="print-add">
      <form onSubmit={handleSubmit}>
        <h3 className="print-add__title">Add Print</h3>
      </form>
    </div>
  );
};

export default connect(null, { toggleModal })(PrintAdd);
