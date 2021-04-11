import React from 'react';
import { MainLayout } from 'layouts/MainLayout';

export const ContactScreen = () => {
  return (
    <MainLayout>
      <div className='contact-screen'>
        <div className='contact-screen__info'>
          <p>
            Personal Email:
            <a href='mailto: erik.felfalusi@gmail.com<'>
              erik.felfalusi@gmail.com
            </a>
          </p>
          <p>
            <a href='mailto: hereticsx555@gmail.com'>
              Booking Email: hereticsx555@gmail.com
            </a>
          </p>
          <p>Phone:+407 42233365</p>
          <p>
            Social:
            <a
              href='https://www.instagram.com/1000bodies/'
              rel='noopener noreferrer'
              target='_blank'
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </MainLayout>
  );
};
