import React from 'react';
import { s3Url } from 'api/url';
import { IProject } from 'interfaces';
import Lightbox from 'components/CommonComponents/LightBox';

interface IProps {
  item: IProject;
  toggleLightbox: Function;
}

const ProjectAttrs: React.FC<IProps> = ({ item, toggleLightbox }) => {
  const { mainImage, medium } = item;
  const backgroundImage = `url(${s3Url}/${mainImage})`;
  const handleToggleLightbox = () => toggleLightbox(true, backgroundImage);
  return (
    <>
      <h1>{item.title}</h1>
      <p className='project-screen__medium'>{medium ? medium : ''}</p>
      <p className='project-screen__description'>{item.description}</p>
      <div className='project-screen__images'>
        <div
          className='project-screen__img'
          style={{ backgroundImage }}
          onClick={handleToggleLightbox}
        />
      </div>
      <Lightbox />
    </>
  );
};

export default ProjectAttrs;
