import React from 'react';

interface IProps {
  cb: Function;
  imgStr: string;
}
const Img: React.FC<IProps> = ({ cb, imgStr }) => {
  const backgroundImage = `url(https://erik-gallery.s3-us-west-1.amazonaws.com/${imgStr})`;

  return (
    <div key={imgStr} className='dashboard-project-images__img-wrapper'>
      <div
        className='dashboard-project-images__img'
        style={{ backgroundImage }}
      >
        <div className='delete-page-btn' onClick={() => cb(imgStr)}>
          <span>X</span>
        </div>
      </div>
    </div>
  );
};

export default Img;
