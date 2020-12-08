import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { File } from "components/CustomInputs";
import Spinner from "components/CommonComponents/Spinner";
import { IError } from "interfaces";
import { createBackground } from "store/actions/backgrounds/createBackground";
import { errors, loading } from "store/selectors/backgrounds";

interface IProps {
  errors: IError[];
  loading: boolean;
  createBackground: Function;
}

const BackgroundForm: React.FC<IProps> = ({
  createBackground,
  errors,
  loading,
}) => {
  const [imageData, setImageData] = React.useState(null);

  const handleFileChange = (e: React.ChangeEvent<any>) =>
    setImageData(e.target.files[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createBackground(imageData);
  };

  const setError = (field: string) =>
    errors ? errors.find((err) => err.field === field) : null;

  if (loading) return <Spinner message="Uploading Background BB" />;
  return (
    <form className="image-form" onSubmit={handleSubmit}>
      <h3 className="image-form__title">Add Background Iamge</h3>
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
});

export default connect(mapStateToProps, { createBackground })(BackgroundForm);
