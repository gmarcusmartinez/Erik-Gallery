import React from 'react';
import { MainLayout } from 'layouts/MainLayout';
import { useActions } from 'hooks/use-actions';

export const LogoutScreen = () => {
  const { logout } = useActions();

  React.useEffect(() => {
    logout();
  }, [logout]);

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
