import React from 'react';
import { s3Url } from 'api/url';
import { useActions } from 'hooks/use-actions';

interface IProps {
  i: number;
  imgUrl: string;
}
const Img: React.FC<IProps> = ({ i, imgUrl }) => {
  const [spans, setSpans] = React.useState(0);
  const imageRef = React.useRef<HTMLImageElement | null>(null);
  const { deleteProjectImage, swap } = useActions();
  const backgroundImage = `${s3Url}/${imgUrl}`;

  const gridAutoRows = 105;
  const calcSpans = (height: number) =>
    setSpans(Math.floor(height / gridAutoRows));

  React.useEffect(() => {
    imageRef.current?.addEventListener('load', () =>
      calcSpans(imageRef.current!.clientHeight)
    );
    calcSpans(imageRef.current!.clientHeight);
  }, []);

  return (
    <div style={{ gridRowEnd: `span ${spans}` }}>
      <img ref={imageRef} src={backgroundImage} alt='project' />
      <div className='reorder-btns'>
        <div onClick={() => swap(i, 'left')}>&lsaquo;</div>
        <div onClick={() => swap(i, 'right')}>&rsaquo;</div>
      </div>
      <div
        className='delete-image-btn'
        onClick={() => deleteProjectImage(imgUrl)}
      >
        <span>X</span>
      </div>
    </div>
  );
};

export default Img;
