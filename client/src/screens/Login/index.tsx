import React from "react";
import { connect } from "react-redux";
import { Text } from "components/CustomInputs";
import MainLayout from "layouts/MainLayout";
import { IError } from "interfaces";

import { createStructuredSelector } from "reselect";
import { selectAuthErrors } from "store/selectors/auth";
import { login } from "store/actions/auth/login";

interface IProps {
  login: Function;
  errors: IError[];
}
const AdminLogin: React.FC<IProps> = ({ errors, login }) => {
  const [formData, setFormData] = React.useState({ email: "", password: "" });
  const { email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(formData);
    setFormData({ email: "", password: "" });
  };

  const setError = (field: string) =>
    errors ? errors.find((err) => err.field === field) : null;

  const invalidCredentialsError =
    errors && errors[0].message === "Invalid Credentials"
      ? errors[0].message
      : null;

  return (
    <MainLayout>
      <div className="admin-screen">
        <form className="admin-form" onSubmit={handleSubmit}>
          <h2 className="admin-form__title">Admin</h2>
          <div className="input-error">{invalidCredentialsError}</div>
          <Text
            label="Email"
            type="text"
            name="email"
            className="admin-input"
            value={email}
            onChange={handleChange}
            error={setError("email")}
          />
          <Text
            label="Password"
            type="password"
            name="password"
            className="admin-input"
            value={password}
            onChange={handleChange}
            error={setError("password")}
          />
          <button type="submit" className="admin-form__btn">
            Submit
          </button>
        </form>
      </div>
    </MainLayout>
  );
};
const mapStateToProps = createStructuredSelector({ errors: selectAuthErrors });
export default connect(mapStateToProps, { login })(AdminLogin);
