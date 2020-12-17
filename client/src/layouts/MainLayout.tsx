import { IBackground } from "interfaces";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchBackgrounds } from "store/actions/backgrounds";
import { activeBackground } from "store/selectors/backgrounds";

interface IProps {
  fetchBackgrounds: Function;
  activeBackground: IBackground;
}
const MainLayout: React.FC<IProps> = (props) => {
  const { children, fetchBackgrounds, activeBackground } = props;

  React.useEffect(() => {
    fetchBackgrounds();
  }, [fetchBackgrounds]);

  let backgroundImage;
  if (activeBackground)
    backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${activeBackground.mainImage})`;

  return (
    <div className="main-layout">
      <div className="main-bg" style={{ backgroundImage }}></div>
      {children}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  activeBackground,
});
export default connect(mapStateToProps, { fetchBackgrounds })(MainLayout);
