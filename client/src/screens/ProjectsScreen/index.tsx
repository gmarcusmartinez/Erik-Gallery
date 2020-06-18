import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from './data';

const Projects = () => {
  const list = projects.map((p) => (
    <Link className='project-item' to={`projects/${p.to}`}>
      <h2>{p.title}</h2>
      <img className='project-preview' src={p.preview_img} alt='project' />
    </Link>
  ));
  return <div className='project-list'>{list}</div>;
};

export default Projects;
