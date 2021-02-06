import React from 'react';
import { s3Url } from 'api/url';

interface ProjectImgProps {
  imgUrl: string;
  cb: Function;
}
const ProjectImg: React.FC<ProjectImgProps> = ({ imgUrl, cb }) => {
  const [spans, setSpans] = React.useState(0);
  const imageRef = React.useRef<HTMLImageElement | null>(null);
  const backgroundImage = `${s3Url}/${imgUrl}`;
  const handleToggleLightbox = () => cb(true, `url(${backgroundImage})`);

  const calcSpans = () => {
    const height = imageRef.current?.clientHeight;
    const numberOfSpans = Math.ceil(height! / 105);
    console.log(height);
    setSpans(numberOfSpans);
  };

  React.useEffect(() => {
    imageRef.current?.addEventListener('load', calcSpans);
  }, []);

  return (
    <div onClick={handleToggleLightbox} style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        className='project-screen__img'
        src={backgroundImage}
        alt='project'
      />
    </div>
  );
};

export default ProjectImg;
