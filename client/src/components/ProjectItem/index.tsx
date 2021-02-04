import React from 'react';
import { s3Url } from 'api/url';
import { IProject } from 'interfaces';
import ProjectAttrs from './attrs';

interface IProps {
  item: IProject;
}

const ProjectItem: React.FC<IProps> = ({ item }) => {
  const { mainImage } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;
  return (
    <div className='project-item'>
      <div className='project-item__img' style={{ backgroundImage }} />
      <ProjectAttrs item={item} />
    </div>
  );
};

export default ProjectItem;
