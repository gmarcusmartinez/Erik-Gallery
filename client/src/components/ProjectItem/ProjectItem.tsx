import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectItemProps {
  _id: string;
  img: string;
  title: string;
  focus: { isFocused: boolean; _id: string };
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  _id,
  img,
  title,
  focus,
}) => {
  return (
    <Link
      to={`project/${_id}`}
      className={`project-item ${
        focus.isFocused && focus._id === _id ? 'focus' : ''
      }`}
    >
      <div className='project-item__overlay'>
        <h2>{title}</h2>
      </div>
      <img src={img} alt='' />
    </Link>
  );
};

export default ProjectItem;
