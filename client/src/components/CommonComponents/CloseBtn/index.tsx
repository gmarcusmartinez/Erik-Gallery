import React from 'react';

interface IProps {
  bool: boolean;
  cb: Function;
  mode: string;
}

const CloseBtn: React.FC<IProps> = ({ bool, cb, mode }) => {
  return (
    <div className='lightbox__close-btn' onClick={() => cb(false)}>
      <div className={`lightbox__bar ${bool ? 'cross' : ''}`}></div>
      <div className={`lightbox__bar ${bool ? 'cross' : ''}`}></div>
      <div className={`lightbox__bar ${bool ? 'cross' : ''}`}></div>
    </div>
  );
};

export default CloseBtn;
