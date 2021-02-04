import React from 'react';
import MainLayout from '../../layouts/MainLayout';

const Bio = () => {
  return (
    <MainLayout>
      <div className='bio-screen'>
        <div className='bio-screen__info'>
          <p>ERIK FELFALUSI</p>
          <p>(b. 1998)</p>
          <p style={{ width: '350px', textAlign: 'center', lineHeight: '2' }}>
            Multidisciplinary artist from Cluj-Napoca, Romania based in Berlin,
            Germany. Following a journey in visual arts representing a
            reinterpretation of street culture and imagery. Volatile when it
            comes to his ways of expression, especially materials, textures and
            layering. Nonetheless evocative and challangeing. Current soundtrack
            while reading this statement: “Bomfunk MC – Freestyler”
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Bio;
