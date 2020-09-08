import React from 'react';

interface ImageSliderProps {
  items: {}[];
  selectedItem: number;
  setSelectedItem: Function;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  items,
  selectedItem,
  setSelectedItem,
}) => {
  const next = () => {
    selectedItem === items.length - 1
      ? setSelectedItem(0)
      : setSelectedItem(selectedItem + 1);
  };
  const previous = () => {
    selectedItem === 0
      ? setSelectedItem(items.length - 1)
      : setSelectedItem(selectedItem - 1);
  };

  return (
    <div className='image-slider'>
      <div>
        <i className='fas fa-chevron-left' onClick={() => previous()}></i>
      </div>
      <div>
        <i className='fas fa-chevron-right' onClick={() => next()}></i>
      </div>
    </div>
  );
};

export default ImageSlider;
