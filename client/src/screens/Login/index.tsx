import React from 'react';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IError } from 'interfaces';
import { Text } from 'components/CustomInputs';
import MainLayout from 'layouts/MainLayout';

const AdminLogin: React.FC = () => {
  const { login } = useActions();
  const { errors } = useTypedSelector((state) => state.auth);

  const [formData, setFormData] = React.useState({ email: '', password: '' });
  const { email, password } = formData;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ email: '', password: '' });
    await login(formData);
  };

  const setError = (field: string) =>
    errors ? errors.find((err: IError) => err.field === field) : null;

  const invalidCredentialsError =
    errors && errors[0].message === 'Invalid Credentials'
      ? errors[0].message
      : null;

  return (
    <MainLayout>
      <div className='admin-screen'>
        <form className='admin-form' onSubmit={handleSubmit}>
          <h2 className='admin-form__title'>Admin</h2>
          <div className='input-error'>{invalidCredentialsError}</div>
          <Text
            label='Email'
            type='text'
            name='email'
            className='admin-input'
            value={email}
            onChange={handleChange}
            error={setError('email')}
          />
          <Text
            label='Password'
            type='password'
            name='password'
            className='admin-input'
            value={password}
            onChange={handleChange}
            error={setError('password')}
          />
          <button type='submit' className='admin-form__btn'>
            Submit
          </button>
        </form>
      </div>
    </MainLayout>
  );
};
export default AdminLogin;
