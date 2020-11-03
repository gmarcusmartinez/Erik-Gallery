import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Text, Select, File } from "components/CustomInputs";
import { createPrint } from "store/actions/prints/createPrint";

import { formDefaultState, inStockOptions } from "./helpers";
import { IError } from "interfaces";
import { printErrors, printLoading } from "store/selectors/prints";
import Spinner from "components/Spinner";

interface IProps {
  errors: IError[];
  createPrint: Function;
  loading: boolean;
}
const PrintAdd: React.FC<IProps> = ({ errors, createPrint, loading }) => {
  const [formData, setFormData] = React.useState(formDefaultState);
  const { description, size, price, inStock } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<any>) =>
    setFormData({ ...formData, image: e.target.files[0] });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      createPrint(formData);
    } catch (e) {}
  };

  const setError = (field: string) =>
    errors ? errors.find((err) => err.field === field) : null;

  if (loading) return <Spinner message="Uploading Print BB" />;
  return (
    <form className="print-add" onSubmit={handleSubmit}>
      <h3 className="print-add__title">Add Print</h3>
      <Text
        placeholder="Description"
        name="description"
        value={description}
        onChange={handleChange}
        error={setError("description")}
      />
      <Text
        placeholder="Size"
        name="size"
        value={size}
        onChange={handleChange}
        error={setError("size")}
      />
      <Text
        placeholder="Price"
        name="price"
        value={price}
        onChange={handleChange}
        error={setError("price")}
      />
      <Select
        label="In Stock"
        value={inStock}
        name="inStock"
        onChange={handleChange}
        renderOptions={renderOptions}
        options={inStockOptions}
      />
      <File onChange={handleFileChange} />
      <button type="submit" className="print-add__btn">
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  errors: printErrors,
  loading: printLoading,
});

export default connect(mapStateToProps, { createPrint })(PrintAdd);

function renderOptions(arr: any[]) {
  return arr.map((el) => <option key={el}>{el}</option>);
}
