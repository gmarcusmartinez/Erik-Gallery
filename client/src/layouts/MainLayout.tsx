import React from 'react';
import { s3Url } from 'api/url';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';

const MainLayout: React.FC = ({ children }) => {
  const { fetchBackgrounds } = useActions();
  const activeBackground = useTypedSelector(({ backgrounds: { items } }) =>
    items.find((b) => b.active === true)
  );

  React.useEffect(() => {
    fetchBackgrounds();
  }, [fetchBackgrounds]);

  let backgroundImage;
  if (activeBackground)
    backgroundImage = `url(${s3Url}/${activeBackground.mainImage})`;

  return (
    <div className='main-layout'>
      <div className='main-bg' style={{ backgroundImage }} />
      {children}
    </div>
  );
};
export default MainLayout;
