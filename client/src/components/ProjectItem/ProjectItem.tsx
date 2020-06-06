import React from 'react';

interface ProjectItemProps {
  _id: string;
  img: string;
  title: string;
  focus: { isFocused: boolean; _id: string };
  setFocus: Function;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  _id,
  img,
  title,
  focus,
  setFocus,
}) => {
  const handleMouseEnter = (_id: string) => {
    setFocus({ _id, isFocused: true });
  };
  const handleMouseOut = () => {
    setFocus({ _id: '', isFocused: false });
  };
  return (
    <div
      className={`project-item ${
        focus.isFocused && focus._id === _id ? 'focus' : ''
      }`}
      onMouseEnter={() => handleMouseEnter(_id)}
      onMouseOut={handleMouseOut}
    >
      <div className='project-item__overlay'>
        <h2>{title}</h2>
      </div>
      <img src={img} alt='' />
    </div>
  );
};

export default ProjectItem;
