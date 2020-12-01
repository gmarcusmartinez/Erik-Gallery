import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Text, File } from "components/CustomInputs";
import Spinner from "components/CommonComponents/Spinner";
import { IError } from "interfaces";
import { createPrint } from "store/actions/prints/createPrint";
import { updatePrint } from "store/actions/prints/updatePrint";
import { errors, loading, selectedItem } from "store/selectors/prints";
import { blankFormState, textInputs } from "./text-inputs";

interface IProps {
  createPrint: Function;
  errors: IError[];
  formTitle: string;
  loading: boolean;
  selectedItem?: any;
  updatePrint: Function;
}

const PrintForm: React.FC<IProps> = ({
  createPrint,
  errors,
  formTitle,
  loading,
  selectedItem,
  updatePrint,
}) => {
  const defaultFormState = formTitle === "Edit" ? selectedItem : blankFormState;
  const [formData, setFormData] = React.useState(defaultFormState);
  const [imageData, setImageData] = React.useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<any>) =>
    setImageData(e.target.files[0]);

  const handleRequest = (type: string) =>
    type === "Edit"
      ? updatePrint(formData, selectedItem._id, imageData)
      : createPrint(formData, imageData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleRequest(formTitle);
  };
  const setError = (field: string) =>
    errors ? errors.find((err) => err.field === field) : null;

  if (loading) return <Spinner message="Uploading Print BB" />;
  return (
    <form className="print-form" onSubmit={handleSubmit}>
      <h3 className="print-form__title">{formTitle} Print</h3>
      {textInputs.map((t, i) => (
        <Text
          key={i}
          label={t.label}
          name={t.name}
          value={formData[t.value]}
          onChange={handleChange}
          error={setError(t.errorField)}
        />
      ))}
      <File
        onChange={handleFileChange}
        error={setError("image")}
        label={imageData ? "Image Selected" : "Choose an Image"}
      />
      <button type="submit" className="print-form__btn">
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
export default connect(mapStateToProps, { createPrint, updatePrint })(
  PrintForm
);
