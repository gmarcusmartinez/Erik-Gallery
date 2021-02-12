import React from 'react';
import { IError } from 'interfaces';
import { File } from 'components/CustomInputs';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Spinner from 'components/CommonComponents/Spinner';

const ImageForm = () => {
  const [imageData, setImageData] = React.useState<File | null>(null);
  const { addProjectImage } = useActions();
  const { errors, loading, selectedItem } = useTypedSelector(
    ({ projects }) => projects
  );
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files ? setImageData(e.target.files[0]) : null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addProjectImage(selectedItem._id, imageData);
  };

  const setError = (field: string) =>
    errors ? errors.find((err: IError) => err.field === field) : null;

  if (loading) return <Spinner message='Uploading Image BB' />;
  return (
    <form className='image-form' onSubmit={handleSubmit}>
      <h3>Add Image</h3>
      <File
        onChange={handleFileChange}
        error={setError('image')}
        selected={imageData ? true : false}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default ImageForm;
