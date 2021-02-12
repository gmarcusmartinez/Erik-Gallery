import React from 'react';
import { IError } from 'interfaces';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Text, File, Checkbox, TextArea } from 'components/CustomInputs';
import { printBlankFormState, printTextInputs } from './text-inputs';
import Spinner from 'components/CommonComponents/Spinner';

interface IProps {
  formTitle: string;
}

const PrintForm: React.FC<IProps> = ({ formTitle }) => {
  const { createPrint, updatePrint } = useActions();
  const [imageData, setImageData] = React.useState<File | null>(null);
  const { errors, loading, selectedItem } = useTypedSelector(
    ({ prints }) => prints
  );
  const defaultFormState =
    formTitle === 'Edit' ? selectedItem : printBlankFormState;
  const [formData, setFormData] = React.useState(defaultFormState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files ? setImageData(e.target.files[0]) : null;

  const handleCheck = () =>
    setFormData({ ...formData, isPublished: !formData.isPublished });

  const handleRequest = (formTitle: string) =>
    formTitle === 'Edit'
      ? updatePrint(formData, selectedItem._id, imageData)
      : createPrint(formData, imageData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleRequest(formTitle);
  };

  const setError = (field: string) =>
    errors ? errors.find((err: IError) => err.field === field) : null;

  if (loading) return <Spinner message='Uploading Print BB' />;
  return (
    <form className='print-form' onSubmit={handleSubmit}>
      <h3 className='print-form__title'>{formTitle} Print</h3>
      <TextArea
        label='Description'
        name='description'
        value={formData.description}
        onChange={handleChange}
        error={setError('description')}
      />
      {printTextInputs.map((t, i) => (
        <Text
          key={i}
          label={t.label}
          name={t.name}
          value={formData[t.value]}
          onChange={handleChange}
          error={setError(t.errorField)}
        />
      ))}
      <Checkbox isPublished={formData.isPublished} onChange={handleCheck} />
      <File
        onChange={handleFileChange}
        error={setError('image')}
        selected={imageData ? true : false}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};
export default PrintForm;
