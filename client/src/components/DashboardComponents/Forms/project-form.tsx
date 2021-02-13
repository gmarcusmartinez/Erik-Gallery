import React from 'react';
import { IError } from 'interfaces';
import { projectBlankFormState, projectTextInputs } from './text-inputs';
import { Text, File, Checkbox, TextArea } from 'components/CustomInputs';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { useActions } from 'hooks/use-actions';
import Spinner from 'components/CommonComponents/Spinner';

const ProjectForm = () => {
  const { createProject, updateProject } = useActions();
  const { loading, errors } = useTypedSelector(({ projects }) => projects);
  const { data } = useTypedSelector(({ modal }) => modal);
  const defaultFormState = data ? data : projectBlankFormState;
  const [formData, setFormData] = React.useState(defaultFormState);
  const [imageData, setImageData] = React.useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: !e.target.value });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files ? setImageData(e.target.files[0]) : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    data
      ? updateProject(formData, data._id, imageData)
      : createProject(formData, imageData);
  };

  const setError = (field: string) =>
    errors ? errors.find((err: IError) => err.field === field) : null;

  if (loading) return <Spinner message='Uploading Project BB' />;
  return (
    <form className='project-form' onSubmit={handleSubmit}>
      <h3>{data ? 'edit' : 'add'} Project</h3>
      {projectTextInputs.map((t, i) => (
        <Text
          key={i}
          label={t.label}
          name={t.name}
          value={formData[t.value]}
          onChange={handleChange}
          error={setError(t.errorField)}
        />
      ))}
      <TextArea
        label='Description'
        name='description'
        value={formData.description}
        onChange={handleChange}
        error={setError('description')}
      />
      <Checkbox
        onChange={handleCheck}
        label='Published'
        name='isPublished'
        bool={formData.isPublished}
      />
      <File
        onChange={handleFileChange}
        error={setError('image')}
        selected={imageData ? true : false}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ProjectForm;
