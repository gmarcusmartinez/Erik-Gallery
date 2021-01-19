import React from 'react';

interface IProps {
  isPublished: boolean;
  handleCheck: Function;
}
const Checkbox: React.FC<IProps> = ({ isPublished, handleCheck }) => {
  return (
    <label className='custom-checkbox'>
      Published
      <input
        type='checkbox'
        checked={isPublished}
        onChange={() => handleCheck(isPublished)}
      />
      <span className='checkmark'></span>
    </label>
  );
};

export default Checkbox;
