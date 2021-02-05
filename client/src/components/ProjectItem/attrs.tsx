import React from 'react';
import { IProject } from 'interfaces';

interface IProps {
  item: IProject;
}

const ProjectItemAttrs: React.FC<IProps> = ({ item }) => {
  return (
    <div className='project-item-attrs'>
      <div className='project-item-attrs__wrapper'>
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export default ProjectItemAttrs;
