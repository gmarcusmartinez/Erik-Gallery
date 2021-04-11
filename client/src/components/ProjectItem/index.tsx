import React from 'react';
import { s3Url } from 'api/url';
import { IProject } from 'interfaces';
import { useHistory } from 'react-router-dom';

export const ProjectItem = ({ item }: { item: IProject }) => {
  const { mainImage } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;
  const histroy = useHistory();
  const handleRedirect = () => histroy.push(`project/${item._id}`);

  return (
    <div className='project-item' onClick={handleRedirect}>
      <div className='project-item__img' style={{ backgroundImage }} />
      <div className='project-item-attrs'>
        <div className='project-item-attrs__wrapper'>
          <p style={{ fontWeight: 700 }}>{item.title}</p>
          <span className='project-item-attrs__btn'>View</span>
        </div>
      </div>
    </div>
  );
};
