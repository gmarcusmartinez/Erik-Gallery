import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { IPrint } from "interfaces";
import { toggleModal } from "store/actions/modal/toggleModal";
import { deletePrint } from "store/actions/prints/deletePrint";
import { selectModalData } from "store/selectors/modal";

interface IProps {
  data: IPrint;
  deleteData: Function;
  toggleModal: Function;
}

const ResourceDelete: React.FC<IProps> = ({
  data,
  deleteData,
  toggleModal,
}) => {
  return <div></div>;
};

const mapStateToProps = createStructuredSelector({ data: selectModalData });
export default connect(mapStateToProps, { deletePrint, toggleModal })(
  ResourceDelete
);
