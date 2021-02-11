import React from 'react';
import { IError } from 'interfaces';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { TextArea } from 'components/CustomInputs';
import Spinner from 'components/CommonComponents/Spinner';

const BioForm = () => {
  const { errors, loading, items } = useTypedSelector(({ bio }) => bio);
  const [formData, setFormData] = React.useState({ text: items[0].text });
  const { updateBio } = useActions();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateBio(formData, items[0]._id);
  };

  const setError = (field: string) =>
    errors ? errors.find((err: IError) => err.field === field) : null;

  if (loading) return <Spinner message='Updating Bio' />;
  return (
    <form className='bio-form' onSubmit={handleSubmit}>
      <h3 className='bio-form__title'>Update Bio</h3>
      <TextArea
        label=''
        name='text'
        value={formData.text}
        onChange={handleChange}
        error={setError('text')}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default BioForm;
