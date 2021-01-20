import React from 'react';
import { s3Url } from 'api/url';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

const ResourceDelete: React.FC = () => {
  const {
    deleteBackground,
    deletePrint,
    deleteZine,
    toggleModal,
  } = useActions();

  const { data } = useTypedSelector((state) => state.modal);

  const handleClick = async (type: string) => {
    toggleModal(false, null);
    switch (type) {
      case 'background':
        return deleteBackground(data._id);
      case 'print':
        return deletePrint(data._id);
      case 'zine':
        return deleteZine(data._id);
    }
  };

  const imageUrl = `${s3Url}/${data.mainImage}`;
  return (
    <div className='resource-delete'>
      <h3 className='resource-delete__title'>
        Are you sure you want to delete this {data.type}?
      </h3>
      <img className='resource-delete__image' src={imageUrl} alt='resource' />
      <div
        className='resource-delete__btn'
        onClick={() => handleClick(data.type)}
      >
        Delete
      </div>
    </div>
  );
};

export default ResourceDelete;
