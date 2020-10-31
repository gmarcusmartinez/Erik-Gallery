import { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectErrors } from "store/selectors/auth";
import { login } from "store/actions/auth/login";
import MainLayout from "layouts/MainLayout";
import AuthInput from "components/AuthInput";

const AdminLogin = ({ errors, login }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login(formData);
    setFormData({ email: "", password: "" });
  };

  const setError = (field) =>
    errors ? errors.find((err) => err.field === field) : null;

  const invalidCredentialsError =
    errors && errors[0].message === "Invalid Credentials"
      ? errors[0].message
      : null;

  return (
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
  );
};

AdminLogin.Layout = MainLayout;
const mapStateToProps = createStructuredSelector({ errors: selectErrors });
export default connect(mapStateToProps, { login })(AdminLogin);
