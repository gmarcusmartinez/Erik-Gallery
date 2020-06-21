import React from 'react';
import { projects } from '../ProjectDetail/data';
const LandingScreen = () => {
  const landingImage = projects[1].images[2].small;
  console.log(landingImage);
  return (
    <div className='landing'>
      <img src={landingImage} alt='' />
    </div>
  );
};

export default LandingScreen;
