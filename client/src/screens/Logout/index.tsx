import React from 'react';
import MainLayout from 'layouts/MainLayout';
import { useActions } from 'hooks/use-actions';

const Logout: React.FC = () => {
  const { logout } = useActions();
  React.useEffect(() => {
    logout();
    // eslint-disable-next-line
  }, []);
  return (
    <MainLayout>
      <div className='logout-screen'>
        <div className='logout-screen__info'>
          <p>Signing you out bb</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default Logout;
