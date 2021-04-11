import React, { ChangeEvent } from 'react';
import { IError } from 'interfaces';

interface IProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error: IError | null | undefined;
  selected: boolean;
}

export const CustomFileInput: React.FC<IProps> = ({
  onChange,
  error,
  selected,
}) => {
  const labelClass = selected ? 'success' : '';
  const label = selected ? 'Image Selected' : 'Choose File';
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
