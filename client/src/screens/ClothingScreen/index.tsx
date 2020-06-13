import React from 'react';
import { items } from './data';
import ImageSlider from '../../components/ImageSlider/ImageSlider';

const ClothingScreen = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);

  let list = items.map((i, index) => (
    <img
      onClick={() => setSelectedItem(index)}
      className={`clothing-img ${selectedItem === index ? 'current' : ''}`}
      key={index}
      src={i.small}
      alt='clothing'
    />
  ));

  return (
    <div className='clothing-screen'>
      <div className='clothing-screen__list'>{list}</div>

      <div className='selected-item'>
        <img
          className='selected-item__img'
          alt='current-clothing'
          src={items[selectedItem].image}
        ></img>
        <ImageSlider
          items={items}
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
        />
      </div>
    </div>
  );
};

export default ClothingScreen;
