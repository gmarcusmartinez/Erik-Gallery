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

  const calcSpans = (height: number) => {
    const gridAutoRows = 10;
    setSpans(Math.round(height / gridAutoRows));
  };

  React.useEffect(() => {
    imageRef.current?.addEventListener('load', () =>
      calcSpans(imageRef.current!.clientHeight)
    );
    calcSpans(imageRef.current!.clientHeight);
  }, []);

  return (
    <div onClick={() => cb()} style={{ gridRowEnd: `span ${spans}` }}>
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
