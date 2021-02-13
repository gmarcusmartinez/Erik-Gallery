import React, { FC, ChangeEvent } from 'react';

interface IProps {
  bool: boolean;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox: FC<IProps> = ({ bool, onChange, label, name }) => {
  return (
    <label className='custom-checkbox'>
      {label}
      <input type='checkbox' checked={bool} onChange={onChange} name={name} />
      <span className='checkmark'></span>
    </label>
  );
};

export default Checkbox;
