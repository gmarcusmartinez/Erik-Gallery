import React from 'react';
import { s3Url } from 'api/url';

interface ProjectImgProps {
  imgUrl: string;
  cb: Function;
}
const ProjectImg: React.FC<ProjectImgProps> = ({ imgUrl, cb }) => {
  const backgroundImage = `url(${s3Url}/${imgUrl})`;
  const handleToggleLightbox = () => cb(true, backgroundImage);

  return (
    <div
      className='project-screen__img'
      style={{ backgroundImage }}
      onClick={handleToggleLightbox}
    />
  );
};

export default ProjectImg;
