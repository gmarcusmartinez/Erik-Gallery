import React from 'react';
import { File } from 'components/CustomInputs';
import Spinner from 'components/CommonComponents/Spinner';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { IError } from 'interfaces';
import { useActions } from 'hooks/use-actions';

const BackgroundForm: React.FC = () => {
  const [imageData, setImageData] = React.useState(null);
  const { loading, errors } = useTypedSelector((state) => state.backgrounds);
  const { createBackground } = useActions();

  const handleFileChange = (e: React.ChangeEvent<any>) =>
    setImageData(e.target.files[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createBackground(imageData);
  };

  const setError = (field: string) =>
    errors ? errors.find((err: IError) => err.field === field) : null;

  if (loading) return <Spinner message='Uploading Background BB' />;
  return (
    <form className='image-form' onSubmit={handleSubmit}>
      <h3 className='image-form__title'>Add Background Image</h3>
      <File
        onChange={handleFileChange}
        error={setError('image')}
        label={imageData ? 'Image Selected' : 'Choose an Image'}
      />
      <button type='submit' className='image-form__btn'>
        Submit
      </button>
    </form>
  );
};

export default BackgroundForm;
