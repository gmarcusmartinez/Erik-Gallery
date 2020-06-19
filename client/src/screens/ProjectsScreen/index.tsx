import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from './data';
import { ThemeContext } from '../../context/ThemeContext';

const Projects = () => {
  const { theme } = React.useContext(ThemeContext);
  const clr = theme === 'light' ? '#585858' : '#e5e5e5';

  const list = projects.map((p) => (
    <Link className='project-item' to={`projects/${p.to}`}>
      <h2 style={{ color: clr }}>{p.title}</h2>
      <img className='project-preview' src={p.preview_img} alt='project' />
    </Link>
  ));
  return <div className='project-list'>{list}</div>;
};

export default Projects;
