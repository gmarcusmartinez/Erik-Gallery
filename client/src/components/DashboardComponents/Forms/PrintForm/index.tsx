import React from 'react';
import { IError } from 'interfaces';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { Text, File, Checkbox } from 'components/CustomInputs';
import { blankFormState, textInputs } from './text-inputs';
import Spinner from 'components/CommonComponents/Spinner';

interface IProps {
  formTitle: string;
}

const PrintForm: React.FC<IProps> = ({ formTitle }) => {
  const { createPrint, updatePrint } = useActions();
  const [imageData, setImageData] = React.useState(null);
  const { errors, loading, selectedItem } = useTypedSelector(
    ({ prints }) => prints
  );
  const defaultFormState = formTitle === 'Edit' ? selectedItem : blankFormState;
  const [formData, setFormData] = React.useState(defaultFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<any>) =>
    setImageData(e.target.files[0]);

  const handleCheck = (bool: boolean) =>
    setFormData({ ...formData, isPublished: !bool });

  const handleRequest = (type: string) =>
    type === 'Edit'
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
      {textInputs.map((t, i) => (
        <Text
          key={i}
          label={t.label}
          name={t.name}
          value={formData[t.value]}
          onChange={handleChange}
          error={setError(t.errorField)}
        />
      ))}
      <Checkbox isPublished={formData.isPublished} handleCheck={handleCheck} />
      <File
        onChange={handleFileChange}
        error={setError('image')}
        label={imageData ? 'Image Selected' : 'Choose an Image'}
      />
      <button type='submit' className='print-form__btn'>
        Submit
      </button>
    </form>
  );
};
export default PrintForm;
