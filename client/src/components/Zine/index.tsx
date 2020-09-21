import React from 'react';
import ImageSlider from 'components/ImageSlider/ImageSlider';

interface IProps {
  zine: { id: number; small: string }[];
}

const Zine: React.FC<IProps> = ({ zine }) => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const imageSliderProps = { selectedItem, setSelectedItem, items: zine };
  console.log(selectedItem);
  return (
    <>
      <div className='zine'>
        <div
          className={`zine__page`}
          style={{ backgroundImage: `url(${zine[selectedItem].small})` }}
        ></div>
      </div>

      <div className='indicator-container'>
        {zine.map((_, i) => (
          <div
            key={i}
            className={`indicator ${selectedItem === i ? 'current' : null}`}
          ></div>
        ))}
      </div>

      <ImageSlider {...imageSliderProps} />
    </>
  );
};

export default Zine;
