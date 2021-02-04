import React from 'react';
import { IProject } from 'interfaces';

interface IProps {
  item: IProject;
}

const ProjectAttrs: React.FC<IProps> = ({ item }) => {
  return (
    <div className='item-attrs'>
      <div className='item-attrs__wrapper'>
        <p>{item.title}</p>
        <div className='item-attrs__btn'>View Project</div>
      </div>
    </div>
  );
};

export default ProjectAttrs;
