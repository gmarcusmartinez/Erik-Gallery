import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { disableBodyScroll } from 'body-scroll-lock';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import { guestLinks, adminLinks } from './helpers';
import setScrollLock from 'utils/set-scroll-lock';

const Links = () => {
  const { closeAll } = useActions();
  const { currentUser } = useTypedSelector(({ auth }) => auth);
  const { isOpen } = useTypedSelector(({ nav }) => nav);
  const history = useHistory();
  const path = history.location.pathname.split('/')[1];

  React.useEffect(() => {
    disableBodyScroll(document.querySelector('.main-content')!);
    return () => {
      setScrollLock(path);
    };
  }, [path]);

  const isAdmin = currentUser && currentUser.role === 'admin';
  const className = `navigation__link ${isOpen ? 'slide-in' : ''}`;
  const links = isAdmin ? [...guestLinks, ...adminLinks] : guestLinks;

  return (
    <ul className={`navigation ${isAdmin ? 'admin-layout' : ''}`}>
      {links.map((l, i) => (
        <li key={i} className={`${className}-${i}`} onClick={() => closeAll()}>
          <Link to={l.to}>{l.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Links;
