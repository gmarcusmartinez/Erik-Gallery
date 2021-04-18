import React from 'react';
import { MainLayout } from 'layouts/MainLayout';

const Contact = () => {
  return (
    <MainLayout>
      <div className='contact-screen'>
        <div className='contact-screen__info'>
          <p>
            <span style={{ fontWeight: 700, marginRight: '10px' }}>Email:</span>
            <a href='mailto: erik.felfalusi@gmail.com<'>
              erik.felfalusi@gmail.com
            </a>
          </p>
          <p>
            <span style={{ fontWeight: 700, marginRight: '10px' }}>Phone:</span>
            + 00 152 26970474
          </p>
          <p>
            <span style={{ fontWeight: 700, marginRight: '10px' }}>
              Social:
            </span>
            <a
              href=' https://www.instagram.com/bigwallsmallbricks/'
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

export default Contact;
