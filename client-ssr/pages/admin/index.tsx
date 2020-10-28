import { useEffect, useState } from "react";
import { connect } from "react-redux";
import MainLayout from "layouts/MainLayout";
import { login } from "store/actions/auth/login";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ email: "", password: "" });
  };

  const { email, password } = formData;
  return (
    <div className="admin-screen">
      <form className="admin-form" onSubmit={handleSubmit}>
        <h2 className="admin-form__title">Admin</h2>
        <input
          placeholder="Email"
          type="text"
          className="auth-input"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          placeholder="Password"
          type="password"
          className="auth-input"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit" className="admin-form__btn">
          Submit
        </button>
      </form>
    </div>
  );
};
AdminLogin.Layout = MainLayout;

export default connect()(AdminLogin);
