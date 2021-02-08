import React, { ChangeEvent } from 'react';
import { IError } from 'interfaces';

interface IProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: IError | null | undefined;
}

const TextArea: React.FC<IProps> = (props) => {
  const { name, value, error, label } = props;

  return (
    <div className='text-area-wrapper'>
      <textarea name={name} value={value} onChange={props.onChange} />
      <label className='text-area-wrapper__label'>{label}</label>
      {error && <div className='input-error'>{error.message}</div>}
    </div>
  );
};

export default TextArea;
