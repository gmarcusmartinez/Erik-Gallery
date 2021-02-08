import React from 'react';
// import { useActions } from 'hooks/use-actions';

interface IProps {
  bio: any;
}

const BioItem: React.FC<IProps> = ({ bio }) => {
  const gridTemplateColumns = '85% 15%';

  return (
    <div className='bio-item' style={{ gridTemplateColumns }}>
      <div className='bio-item__text'>{bio.text}</div>
      <div
        className='dash-btn'
        style={{ display: 'block', margin: 'auto' }}
        onClick={() => {}}
      >
        Edit
      </div>
    </div>
  );
};

export default BioItem;
