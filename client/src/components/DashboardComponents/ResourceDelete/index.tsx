import React from 'react';
import { s3Url } from 'api/url';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

const ResourceDelete: React.FC = () => {
  const {
    deleteBackground,
    deletePrint,
    deleteProject,
    toggleModal,
  } = useActions();

  const { data } = useTypedSelector(({ modal }) => modal);

  const handleClick = async (type: string) => {
    toggleModal(false, null);
    if (data) {
      switch (type) {
        case 'background':
          return deleteBackground(data._id);
        case 'print':
          return deletePrint(data._id);
        case 'project':
          return deleteProject(data._id);
      }
    }
  };

  const imageUrl = `${s3Url}/${data?.mainImage}`;
  return (
    <div className='resource-delete'>
      <img className='resource-delete__image' src={imageUrl} alt='resource' />
      <div
        className='resource-delete__btn'
        onClick={() => handleClick(data!.type)}
      >
        Delete
      </div>
    </div>
  );
};

export default ResourceDelete;
