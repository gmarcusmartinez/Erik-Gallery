import React from "react";
import { connect } from "react-redux";
import CustomInput from "components/CustomInput";
import CustomSelect from "components/CustomSelect";
import { toggleModal } from "store/actions/modal/toggleModal";
import CustomFileInput from "components/CustomFileInput";
import { createPrint } from "store/actions/prints/index";
import { formDefaultState, inStockOptions } from "./helpers";

interface IProps {
  toggleModal: Function;
  errors: any[];
  createPrint: Function;
}
const PrintAdd: React.FC<IProps> = ({ toggleModal, errors, createPrint }) => {
  const [formData, setFormData] = React.useState(formDefaultState);
  const { description, size, price, inStock } = formData;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<any>) =>
    setFormData({ ...formData, image: e.target.files[0] });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPrint(formData);
  };

  const setError = (field: string) =>
    errors ? errors.find((err) => err.field === field) : null;

  return (
    <form className="print-add" onSubmit={handleSubmit}>
      <h3 className="print-add__title">Add Print</h3>
      <CustomInput
        placeholder="Description"
        name="description"
        value={description}
        onChange={handleChange}
        error={setError("description")}
      />
      <CustomInput
        placeholder="Size"
        name="size"
        value={size}
        onChange={handleChange}
        error={setError("size")}
      />
      <CustomInput
        placeholder="Price"
        name="price"
        value={price}
        onChange={handleChange}
        error={setError("price")}
      />
      <CustomSelect
        label="In Stock"
        value={inStock}
        name="inStock"
        onChange={handleChange}
        renderOptions={renderOptions}
        options={inStockOptions}
      />
      <CustomFileInput onChange={handleFileChange} />
      <button type="submit" className="print-add__btn">
        Submit
      </button>
    </form>
  );
};
const mapStateToProps = (state: any) => ({
  errors: state.prints.errors,
});

export default connect(mapStateToProps, { toggleModal, createPrint })(PrintAdd);

function renderOptions(arr: any[]) {
  return arr.map((el) => <option key={el}>{el}</option>);
}
