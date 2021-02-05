import React from 'react';
import { IProject } from 'interfaces';
import Lightbox from 'components/CommonComponents/LightBox';
import ProjectImg from './ProjectImg';

interface IProps {
  item: IProject;
  toggleLightbox: Function;
}

const ProjectAttrs: React.FC<IProps> = ({ item, toggleLightbox }) => {
  const { mainImage, medium } = item;

  const list = [mainImage, ...item.images].map((imgUrl, i) => (
    <ProjectImg key={i} imgUrl={imgUrl} cb={toggleLightbox} />
  ));

  return (
    <>
      <h1>{item.title}</h1>
      <p className='project-screen__medium'>{medium ? medium : ''}</p>
      <p className='project-screen__description'>{item.description}</p>
      <div className='project-screen__images'>{list}</div>
      <Lightbox />
    </>
  );
};

export default ProjectAttrs;
