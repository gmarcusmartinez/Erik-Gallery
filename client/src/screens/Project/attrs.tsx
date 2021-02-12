import React from 'react';
import { IProject } from 'interfaces';
import { useActions } from 'hooks/use-actions';
import Lightbox from 'components/CommonComponents/LightBox';
import ProjectImg from './ProjectImg';

interface IProps {
  item: IProject;
}

const ProjectAttrs: React.FC<IProps> = ({ item }) => {
  const { medium, images, description, title } = item;
  const { toggleLightbox } = useActions();

  const list =
    images.length &&
    images.map((imgUrl, i) => {
      const handleToggleLightbox = () => toggleLightbox(true, images, i);
      return <ProjectImg key={i} imgUrl={imgUrl} cb={handleToggleLightbox} />;
    });

  return (
    <>
      <h1>{title}</h1>
      <p className='project-screen__medium'>{medium ? medium : ''}</p>
      <p className='project-screen__description'>{description}</p>
      <div className='project-screen__images'>{list}</div>
      <Lightbox />
    </>
  );
};

export default ProjectAttrs;
