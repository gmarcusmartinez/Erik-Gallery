import React from 'react';
import { s3Url } from 'api/url';

interface ProjectImgProps {
  imgUrl: string;
  cb: Function;
}
const ProjectImg: React.FC<ProjectImgProps> = ({ imgUrl, cb }) => {
  const [spans, setSpans] = React.useState(0);
  const imageRef = React.useRef<HTMLImageElement | null>(null);
  const handleToggleLightbox = () => cb(true, `url(${s3Url}/${imgUrl})`);
  const calcSpans = (n: number) => setSpans(Math.ceil(n / 105));

  React.useEffect(() => {
    calcSpans(imageRef.current?.clientHeight!);
  }, []);

  return (
    <div onClick={handleToggleLightbox} style={{ gridRowEnd: `span ${spans}` }}>
      <img
        ref={imageRef}
        className='project-screen__img'
        src={`${s3Url}/${imgUrl}`}
        alt='project'
      />
    </div>
  );
};

export default ProjectImg;
