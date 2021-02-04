import React from 'react';
import { IError } from 'interfaces';
import { blankFormState, textInputs } from './text-inputs';
import { Text, File, Checkbox } from 'components/CustomInputs';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import Spinner from 'components/CommonComponents/Spinner';

interface IProps {
  formTitle: string;
}

const ProjectForm: React.FC<IProps> = ({ formTitle }) => {
  const { createProject, updateProject } = useActions();
  const { loading, selectedItem, errors } = useTypedSelector(
    ({ projects }) => projects
  );
  const defaultFormState = formTitle === 'Edit' ? selectedItem : blankFormState;
  const [formData, setFormData] = React.useState(defaultFormState);
  const [imageData, setImageData] = React.useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files ? setImageData(e.target.files[0]) : null;

  const handleCheck = (bool: boolean) =>
    setFormData({ ...formData, isPublished: !bool });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formTitle === 'Edit'
      ? updateProject(formData, selectedItem._id, imageData)
      : createProject(formData, imageData);
  };
  const setError = (field: string) =>
    errors ? errors.find((err: IError) => err.field === field) : null;

  if (loading) return <Spinner message='Uploading Project BB' />;
  return (
    <form className='zine-form' onSubmit={handleSubmit}>
      <h3 className='zine-form__title'>{formTitle} Project</h3>
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
      <button type='submit' className='zine-form__btn'>
        Submit
      </button>
    </form>
  );
};

export default ProjectForm;
