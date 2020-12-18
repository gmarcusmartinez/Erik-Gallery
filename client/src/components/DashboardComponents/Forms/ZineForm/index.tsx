import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { blankFormState, textInputs } from "./text-inputs";
import { Text, File, Checkbox } from "components/CustomInputs";
import { IError } from "interfaces";
import { errors, loading, selectedItem } from "store/selectors/zines";
import { createZine, updateZine } from "store/actions/zines";
import Spinner from "components/CommonComponents/Spinner";

interface IProps {
  createZine: Function;
  errors: IError[];
  formTitle: string;
  loading: boolean;
  selectedItem?: any;
  updateZine: Function;
}

const ZineForm: React.FC<IProps> = (props) => {
  const defaultFormState =
    props.formTitle === "Edit" ? props.selectedItem : blankFormState;

  const [formData, setFormData] = React.useState(defaultFormState);
  const [imageData, setImageData] = React.useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<any>) =>
    setImageData(e.target.files[0]);

  const handleCheck = (bool: boolean) =>
    setFormData({ ...formData, isPublished: !bool });

  const handleRequest = (type: string) =>
    type === "Edit"
      ? props.updateZine(formData, props.selectedItem._id, imageData)
      : props.createZine(formData, imageData);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleRequest(props.formTitle);
  };
  const setError = (field: string) =>
    props.errors ? props.errors.find((err) => err.field === field) : null;

  if (props.loading) return <Spinner message="Uploading Zine BB" />;
  return (
    <form className="zine-form" onSubmit={handleSubmit}>
      <h3 className="zine-form__title">{props.formTitle} Zine</h3>
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
      <Checkbox isPublished={formData.isPublished} handleCheck={handleCheck} />
      <File
        onChange={handleFileChange}
        error={setError("image")}
        label={imageData ? "Image Selected" : "Choose an Image"}
      />
      <button type="submit" className="zine-form__btn">
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

export default connect(mapStateToProps, { createZine, updateZine })(ZineForm);
