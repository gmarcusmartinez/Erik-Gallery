import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { blankFormState } from "./helpers";
import { Text, File } from "components/CustomInputs";
import { createPrint } from "store/actions/prints/createPrint";
import { updatePrint } from "store/actions/prints/updatePrint";
import { errors, loading, selectedItem } from "store/selectors/prints";
import { IError } from "interfaces";
import Spinner from "components/Spinner";

interface IProps {
  errors: IError[];
  createPrint: Function;
  loading: boolean;
  formTitle: string;
  selectedItem?: any;
  updatePrint: Function;
}

const PrintForm: React.FC<IProps> = ({
  errors,
  createPrint,
  loading,
  formTitle,
  selectedItem,
  updatePrint,
}) => {
  const defaultFormState = formTitle === "Edit" ? selectedItem : blankFormState;
  const [formData, setFormData] = React.useState(defaultFormState);
  const [imageData, setImageData] = React.useState(null);
  const { description, size, price, quantityInStock } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<any>) =>
    setImageData(e.target.files[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const request = () =>
      formTitle === "Edit"
        ? updatePrint(formData, selectedItem._id, imageData)
        : createPrint(formData, imageData);
    try {
      request();
    } catch (e) {}
  };

  const setError = (field: string) =>
    errors ? errors.find((err) => err.field === field) : null;

  if (loading) return <Spinner message="Uploading Print BB" />;
  return (
    <form className="print-add" onSubmit={handleSubmit}>
      <h3 className="print-add__title">{formTitle} Print</h3>
      <Text
        label="Description"
        name="description"
        value={description}
        onChange={handleChange}
        error={setError("description")}
      />
      <Text
        label="Size"
        name="size"
        value={size}
        onChange={handleChange}
        error={setError("size")}
      />
      <Text
        label="Price"
        name="price"
        value={price}
        onChange={handleChange}
        error={setError("price")}
      />
      <Text
        label="Quantity In Stock"
        name="quantityInStock"
        value={quantityInStock}
        onChange={handleChange}
        error={setError("quantityInStock")}
      />

      <File onChange={handleFileChange} />
      <button type="submit" className="print-add__btn">
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
