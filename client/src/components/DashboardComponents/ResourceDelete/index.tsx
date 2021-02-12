import React from 'react';
import { s3Url } from 'api/url';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

const ResourceDelete = () => {
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
      if (type === 'background') return deleteBackground(data._id);
      if (type === 'print') return deletePrint(data._id);
      if (type === 'project') return deleteProject(data._id);
    }
  };

  return (
    <div className='resource-delete'>
      <img src={`${s3Url}/${data.mainImage}`} alt='resource' />
      <div onClick={() => handleClick(data.type)}>Delete</div>
    </div>
  );
};

export default ResourceDelete;
