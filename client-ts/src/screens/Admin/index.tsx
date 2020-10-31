import React from "react";
import { connect } from "react-redux";
import AuthInput from "components/AuthInput";
import MainLayout from "layouts/MainLayout";

import { createStructuredSelector } from "reselect";
import { selectErrors } from "store/selectors/auth";
import { loginStart } from "store/actions/auth/login";

interface IProps {
  loginStart: Function;
  errors: any[];
}
const AdminLogin: React.FC<IProps> = ({ errors, loginStart }) => {
  const [formData, setFormData] = React.useState({
    email: "testuser@gmail.com",
    password: "password",
  });
  const { email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await loginStart(formData);
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
          <AuthInput
            placeholder="Email"
            type="text"
            name="email"
            value={email}
            onChange={handleChange}
            error={setError("email")}
          />
          <AuthInput
            placeholder="Password"
            type="password"
            name="password"
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
const mapStateToProps = createStructuredSelector({ errors: selectErrors });
export default connect(mapStateToProps, { loginStart })(AdminLogin);
