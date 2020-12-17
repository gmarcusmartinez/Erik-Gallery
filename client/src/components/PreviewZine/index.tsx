import { IZine } from "interfaces";
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectModalData } from "store/selectors/modal";

interface IProps {
  data: IZine;
}
const PreviewZine: React.FC<IProps> = ({ data }) => {
  const [selectedPage, setSelectedPage] = React.useState(0);

  const zinePages = data.images.map((page: string, i: number) => {
    const imageUrl = `https://erik-gallery.s3-us-west-1.amazonaws.com/${page}`;
    return (
      <img
        key={i}
        src={imageUrl}
        className={`preview-zine__image`}
        alt="page"
      />
    );
  });
  const next = () => {
    if (selectedPage === zinePages.length - 1) setSelectedPage(0);
    else setSelectedPage(selectedPage + 1);
  };

  const previous = () => {
    if (selectedPage === 0) setSelectedPage(zinePages.length - 1);
    else setSelectedPage(selectedPage - 1);
  };

  return (
    <div className="preview-zine">
      <div className="next-btn" onClick={next}>
        &rsaquo;
      </div>
      <div className="previous-btn" onClick={previous}>
        &lsaquo;
      </div>
      <div className="zine-pages">{zinePages}</div>
      <div className="selected-zine-page">{zinePages[selectedPage]}</div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({ data: selectModalData });

export default connect(mapStateToProps, {})(PreviewZine);
