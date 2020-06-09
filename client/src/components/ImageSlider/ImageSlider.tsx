import React from 'react';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    current === images.length - 1 ? setCurrent(0) : setCurrent(current + 1);
  };
  const previous = () => {
    current === 0 ? setCurrent(images.length - 1) : setCurrent(current - 1);
  };
  // let list = images.map((el) => (
  //   <img className='current-image' src={el} alt='project' />
  // ));
  return (
    <div className='image-slider'>
      <i className='fas fa-chevron-left' onClick={() => previous()}></i>
      <img className='current-image' src={images[current]} alt='project' />
      <i className='fas fa-chevron-right' onClick={() => next()}></i>
    </div>
  );
};

export default ImageSlider;
