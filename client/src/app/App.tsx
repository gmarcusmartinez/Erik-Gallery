import React from 'react';
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
    // eslint-disable-next-line
  }, []);

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
          <Route exact path='/' component={screens.LandingScreen} />
          <Route path='/contact' component={screens.ContactScreen} />
          <Route path='/checkout' component={screens.CartScreen} />
          <Route path='/login' component={screens.LoginScreen} />
          <Route path='/logout' component={screens.LogoutScreen} />
          <Route path='/payment/' component={screens.PaymentScreen} />
          <Route exact path='/prints/' component={screens.PrintsScreen} />
          <Route exact path='/prints/:page' component={screens.PrintsScreen} />
          <Route path='/review-order' component={screens.ReviewOrderScreen} />
          <Route path='/shipping' component={screens.ShippingScreen} />
          <Route path='/soldout' component={screens.SoldoutScreen} />
          <Route path='/sound' component={screens.SoundScreen} />
          <Route exact path='/zines' component={screens.ZinesScreen} />
          <Route exact path='/zines/:page' component={screens.ZinesScreen} />

          <PRoute
            exact
            path='/dashboard'
            currentUser={currentUser}
            component={screens.Dashboard}
          />
          <PRoute
            exact
            path='/dashboard/zine/:id'
            currentUser={currentUser}
            component={screens.DashboardZine}
          />
          <PRoute
            exact
            path='/dashboard/order/:id'
            currentUser={currentUser}
            component={screens.Order}
          />
          <Route component={screens.NotFoundScreen} />
        </Switch>
      </div>
      <Modal />
    </>
  );
};

export default App;
