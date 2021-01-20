import React, { ChangeEvent } from 'react';
import { IError } from 'interfaces';

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: IError | null | undefined;
  label: string;
}

const CustomFileInput: React.FC<IProps> = ({ onChange, error, label }) => {
  const labelClass = label === 'Image Selected' ? 'success' : '';
  return (
    <div className='custom-file-input-wrapper'>
      <input
        className='custom-file-input'
        type='file'
        accept='image/*'
        onChange={onChange}
      />
      <label className={`file-input-label ${labelClass}`}>{label}</label>
      {error && (
        <div className={`input-error ${labelClass}`}>{error.message}</div>
      )}
    </div>
  );
};

export default CustomFileInput;
