import React from 'react';
import { projects } from './data';
import ProjectItem from 'components/ProjectItem';

const GalleryScreen = () => {
  let list = projects.map((p) => <ProjectItem project={p} />);
  return (
    <div className='gallery-screen'>
      <div className='projects'>{list}</div>
    </div>
  );
};

export default GalleryScreen;
