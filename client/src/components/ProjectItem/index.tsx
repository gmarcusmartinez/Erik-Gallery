import React from 'react';
import { s3Url } from 'api/url';
import { IProject } from 'interfaces';
import { useHistory } from 'react-router-dom';

interface IProps {
  item: IProject;
}

const ProjectItem: React.FC<IProps> = ({ item }) => {
  const { mainImage } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;

  const histroy = useHistory();
  const handleRedirect = () => histroy.push(`project/${item._id}`);

  return (
    <div className='project-item' onClick={handleRedirect}>
      <div className='project-item__img' style={{ backgroundImage }} />
      <div className='project-item-attrs'>
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export default ProjectItem;
