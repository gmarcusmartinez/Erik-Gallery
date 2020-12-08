import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { IZine } from "interfaces";
import { deleteZinePage, fetchZine } from "store/actions/zines";
import { selectedItem } from "store/selectors/zines";
import { toggleModal } from "store/actions/modal/toggleModal";
import ZinePage from "./ZinePage";

interface IProps {
  deleteZinePage: Function;
  fetchZine: Function;
  toggleModal: Function;
  zine: IZine;
}

const DashboardZine: React.FC<IProps> = (props) => {
  const { deleteZinePage, fetchZine, toggleModal, zine } = props;
  const history = useHistory();
  const id = history.location.pathname.split("/")[3];

  const toggleAddImage = async () => toggleModal(true, "ADD_IMG", zine);
  const handleDeletePage = (imgStr: string) => deleteZinePage(zine._id, imgStr);

  React.useEffect(() => {
    fetchZine(id);
  }, [fetchZine, id]);

  const list = zine
    ? zine.images.map((imgStr) => (
        <ZinePage key={imgStr} cb={handleDeletePage} imgStr={imgStr} />
      ))
    : null;

  return (
    <div className="dashboard-zine">
      <div className="dashboard-zine__pages">{list}</div>
      <div className="add-page-btn" onClick={toggleAddImage}>
        Add Page
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  zine: selectedItem,
});

export default connect(mapStateToProps, {
  deleteZinePage,
  fetchZine,
  toggleModal,
})(DashboardZine);
