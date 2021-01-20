import React from 'react';
import { IError } from 'interfaces';
import { File } from 'components/CustomInputs';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Spinner from 'components/CommonComponents/Spinner';

const ImageForm: React.FC = () => {
  const [imageData, setImageData] = React.useState(null);
  const label = imageData ? 'Image Selected' : 'Choose an Image';
  const { addZineImage } = useActions();
  const { errors, loading, selectedItem } = useTypedSelector(
    ({ zines }) => zines
  );
  const handleFileChange = (e: React.ChangeEvent<any>) =>
    setImageData(e.target.files[0]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addZineImage(selectedItem._id, imageData);
  };

  const setError = (field: string) =>
    errors ? errors.find((err: IError) => err.field === field) : null;

  if (loading) return <Spinner message='Uploading Image BB' />;
  return (
    <form className='image-form' onSubmit={handleSubmit}>
      <h3 className='image-form__title'>Add Image</h3>
      <File
        onChange={handleFileChange}
        error={setError('image')}
        label={label}
      />
      <button type='submit' className='image-form__btn'>
        Submit
      </button>
    </form>
  );
};

export default ImageForm;
