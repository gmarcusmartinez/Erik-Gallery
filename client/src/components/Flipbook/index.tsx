import React from 'react';
import ImageSlider from 'components/ImageSlider/ImageSlider';

interface IProps {
  zine: { id: number; small: string }[];
}

const Flipbook: React.FC<IProps> = ({ zine }) => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const imageSliderProps = { selectedItem, setSelectedItem, items: zine };

  // let list = zine.map((i, index) => (
  //   <img
  //     onClick={() => setSelectedItem(index)}
  //     className={`zine-img ${selectedItem === index ? 'current' : ''}`}
  //     key={index}
  //     src={i.small}
  //     alt='zine'
  //   />
  // ));
  return (
    <div className='flipbook'>
      <div
        className='flipbook__selected-page'
        style={{ backgroundImage: `url(${zine[selectedItem].small})` }}
      >
        <ImageSlider {...imageSliderProps} />
      </div>
      <div className='flipbook__slider'>Slider</div>
    </div>
  );
};

export default Flipbook;
