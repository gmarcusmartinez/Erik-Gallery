import React from 'react';
import { MainLayout } from 'layouts/MainLayout';

export const NotFoundScreen = () => {
  return (
    <MainLayout>
      <div className='notfound-screen'>
        <div className='notfound-screen__info'>
          <p>Sorry we can not find this page</p>
        </div>
      </div>
    </MainLayout>
  );
};
