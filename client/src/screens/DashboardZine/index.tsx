import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { IZine } from "interfaces";
import { fetchZine } from "store/actions/zines";
import { selectedItem } from "store/selectors/zines";
import { toggleModal } from "store/actions/modal/toggleModal";

interface IProps {
  fetchZine: Function;
  toggleModal: Function;
  zine: IZine;
}

const DashboardZine: React.FC<IProps> = ({ fetchZine, toggleModal, zine }) => {
  const history = useHistory();
  const id = history.location.pathname.split("/")[3];
  const toggleAddImage = async () => toggleModal(true, "ADD_IMG", zine);

  React.useEffect(() => {
    fetchZine(id);
  }, []);

  const list = zine
    ? zine.images.map((img) => {
        const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${img})`;
        return (
          <div key={img} className="dashboard-zine__page">
            <div className="dashboard-zine__img" style={{ backgroundImage }}>
              <div className="delete-page-btn" onClick={() => {}}>
                Delete
              </div>
            </div>
          </div>
        );
      })
    : null;

  return (
    <div className="dashboard-zine">
      <div className="dashboard-zine__pages">{list}</div>
      <div
        className="add-page-btn"
        onClick={toggleAddImage}
        style={{ fontSize: "0.8rem" }}
      >
        Add Image
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  zine: selectedItem,
});

export default connect(mapStateToProps, { fetchZine, toggleModal })(
  DashboardZine
);
