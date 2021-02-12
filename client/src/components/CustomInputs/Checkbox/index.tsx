import React, { ChangeEvent } from 'react';

interface IProps {
  isPublished: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox: React.FC<IProps> = ({ isPublished, onChange }) => {
  return (
    <label className='custom-checkbox'>
      Published
      <input type='checkbox' checked={isPublished} onChange={onChange} />
      <span className='checkmark'></span>
    </label>
  );
};

export default Checkbox;
