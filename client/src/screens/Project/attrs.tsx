import React from 'react';
import { s3Url } from 'api/url';
import { IProject } from 'interfaces';

interface IProps {
  item: IProject;
}

const ProjectAttrs: React.FC<IProps> = ({ item }) => {
  const backgroundImage = `url(${s3Url}/${item.mainImage})`;

  return (
    <>
      <h1>{item.title}</h1>
      <p className='project-screen__medium'>{item.medium}</p>
      <p className='project-screen__description'>{item.description}</p>
      <div className='project-screen__images'>
        <div className='project-screen__img' style={{ backgroundImage }} />
      </div>
    </>
  );
};

export default ProjectAttrs;
