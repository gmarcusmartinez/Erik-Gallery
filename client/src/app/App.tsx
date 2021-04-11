import React, { Suspense } from 'react';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import setScrollLock from 'utils/set-scroll-lock';
import { PRoute } from 'components/CommonComponents/ProtectedRoute';
import { useActions } from 'hooks/use-actions';
import { useTypedSelector } from 'hooks/use-typed-selector';
import Navigation from 'components/Navigation';
import Modal from 'components/CommonComponents/Modal';
import * as screens from 'screens';

const App: React.FC = () => {
  const { getCurrentUser } = useActions();
  const { currentUser } = useTypedSelector((state) => state.auth);

  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const history = useHistory();
  useRouteMatch();
  const path = history.location.pathname.split('/')[1];
  React.useEffect(() => {
    setScrollLock(path);
  }, [path]);

  return (
    <>
      <Navigation />
      <div className='main-content'>
        <Switch>
          <Suspense fallback={<div></div>}>
            <Route exact path='/' component={screens.LandingScreen} />
            <Route exact path='/bio' component={screens.BioScreen} />
            <Route path='/contact' component={screens.ContactScreen} />
            <Route exact path='/gallery' component={screens.GalleryScreen} />
            <Route path='/login' component={screens.LoginScreen} />
            <Route path='/logout' component={screens.LogoutScreen} />
            <Route exact path='/prints/' component={screens.PrintsScreen} />
            <Route
              exact
              path='/prints/:page'
              component={screens.PrintsScreen}
            />
            <Route
              exact
              path='/project/:id'
              component={screens.ProjectScreen}
            />

            <PRoute
              exact
              path='/dashboard'
              currentUser={currentUser}
              component={screens.Dashboard}
            />
            <PRoute
              exact
              path='/dashboard/project/:id'
              currentUser={currentUser}
              component={screens.ProjectImages}
            />
          </Suspense>
          <Route component={screens.NotFoundScreen} />
        </Switch>
      </div>
      <Modal />
    </>
  );
};

export default App;
