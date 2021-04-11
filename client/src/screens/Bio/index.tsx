import React from 'react';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { MainLayout } from 'layouts/MainLayout';
import { Spinner } from 'components/CommonComponents/Spinner';

export const BioScreen = () => {
  const { fetchBio } = useActions();
  const { items, loading } = useTypedSelector((state) => state.bio);

  React.useEffect(() => {
    fetchBio();
  }, [fetchBio]);

  if (loading) return <Spinner />;
  return (
    <MainLayout>
      <div className='bio-screen'>
        <div className='bio-screen__info'>
          <p>ERIK FELFALUSI</p>
          <p>(b. 1998)</p>
          <p style={{ width: '330px', textAlign: 'center', lineHeight: '2.2' }}>
            {items[0].text}
          </p>
        </div>
      </div>
    </MainLayout>
  );
};
