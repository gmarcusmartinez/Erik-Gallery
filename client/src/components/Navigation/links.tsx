import React from 'react';
import { useHistory } from 'react-router-dom';
import { disableBodyScroll } from 'body-scroll-lock';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import renderLinks from './RenderLinks';
import setScrollLock from 'utils/set-scroll-lock';

const Links: React.FC = () => {
  const { closeAll } = useActions();
  const { currentUser } = useTypedSelector(({ auth }) => auth);
  const { isOpen } = useTypedSelector(({ nav }) => nav);

  let isAdmin = currentUser && currentUser.role === 'admin' ? true : false;
  const adminLinks = `${isAdmin ? 'admin-layout' : ''}`;
  const history = useHistory();
  const path = history.location.pathname.split('/')[1];

  React.useEffect(() => {
    disableBodyScroll(document.querySelector('.main-content')!);
    return () => {
      setScrollLock(path);
    };
  }, [path]);

  return (
    <ul className={`navigation ${adminLinks}`}>
      {renderLinks(isOpen, closeAll, isAdmin)}
    </ul>
  );
};

export default Links;
