import React from 'react';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { File } from 'components/CustomInputs';
import { Spinner } from 'components/CommonComponents/Spinner';

const BackgroundForm: React.FC = () => {
  const [imageData, setImageData] = React.useState<File | null>(null);
  const [filesizeError, setFilesizeError] = React.useState('');

  const { createBackground } = useActions();
  const { loading, errors } = useTypedSelector((state) => state.backgrounds);
  const setError = (s: string) => errors?.find(({ field }) => field === s);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilesizeError('');
    const maxsize = 1000000;
    if (e.target.files) {
      const fileSize = e.target.files[0].size;
      if (fileSize > maxsize) {
        return setFilesizeError('Image must be under 1MB');
      }
      return setImageData(e.target.files[0]);
    }
    return;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createBackground(imageData);
  };

  if (loading) return <Spinner message='Uploading Background BB' />;
  return (
    <>
      <span className='file-size-error'>{filesizeError}</span>
      <form className='image-form' onSubmit={handleSubmit}>
        <h3 className='image-form__title'>Add Background Image</h3>
        <File
          onChange={handleFileChange}
          error={setError('image')}
          selected={imageData ? true : false}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default BackgroundForm;
