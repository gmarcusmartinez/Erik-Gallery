import React, { FC } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { File } from "components/CustomInputs";
import Spinner from "components/CommonComponents/Spinner";
import { IError } from "interfaces";

import { addZineImage } from "store/actions/zines";
import { errors, loading, selectedItem } from "store/selectors/zines";

interface IProps {
  errors: IError[];
  loading: boolean;
  addZineImage: Function;
  selectedItem: any;
}

const ImageForm: FC<IProps> = (props) => {
  const [imageData, setImageData] = React.useState(null);

  const handleFileChange = (e: React.ChangeEvent<any>) =>
    setImageData(e.target.files[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addZineImage(props.selectedItem._id, imageData);
  };

  const setError = (field: string) =>
    props.errors ? props.errors.find((err) => err.field === field) : null;

  if (props.loading) return <Spinner message="Uploading Image BB" />;
  return (
    <form className="image-form" onSubmit={handleSubmit}>
      <h3 className="image-form__title">Add Image</h3>
      <File
        onChange={handleFileChange}
        error={setError("image")}
        label={imageData ? "Image Selected" : "Choose an Image"}
      />
      <button type="submit" className="image-form__btn">
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  errors,
  loading,
  selectedItem,
});

export default connect(mapStateToProps, { addZineImage })(ImageForm);
