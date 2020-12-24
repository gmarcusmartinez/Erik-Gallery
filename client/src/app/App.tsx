import React, { FC } from "react";
import { connect } from "react-redux";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import * as screens from "screens";
import Navigation from "components/Navigation";
import { getCurrentUser } from "store/actions/auth";
import { PRoute } from "components/CommonComponents/ProtectedRoute";
import Modal from "components/CommonComponents/Modal";
import setScrollLock from "utils/set-scroll-lock";

interface IProps {
  getCurrentUser: Function;
  currentUser: { role: string };
}

const App: FC<IProps> = ({ getCurrentUser, currentUser }) => {
  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  const history = useHistory();
  useRouteMatch();
  const path = history.location.pathname.split("/")[1];
  React.useEffect(() => {
    setScrollLock(path);
  }, [path]);

  return (
    <>
      <Navigation />
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={screens.LandingScreen} />
          <Route path="/contact" component={screens.ContactScreen} />
          <Route path="/checkout" component={screens.CheckoutScreen} />
          <Route path="/login" component={screens.LoginScreen} />
          <Route path="/logout" component={screens.LogoutScreen} />
          <Route path="/payment/" component={screens.PaymentScreen} />
          <Route exact path="/prints/" component={screens.PrintsScreen} />
          <Route exact path="/prints/:page" component={screens.PrintsScreen} />
          <Route path="/review-order" component={screens.ReviewOrderScreen} />
          <Route path="/shipping" component={screens.ShippingScreen} />
          <Route path="/sound" component={screens.SoundScreen} />
          <Route exact path="/zines" component={screens.ZinesScreen} />
          <Route exact path="/zines/:page" component={screens.ZinesScreen} />

          <PRoute
            exact
            path="/dashboard"
            currentUser={currentUser}
            component={screens.Dashboard}
          />
          <PRoute
            exact
            path="/dashboard/zine/:id"
            currentUser={currentUser}
            component={screens.DashboardZine}
          />
          <Route component={screens.NotFoundScreen} />
        </Switch>
      </div>
      <Modal />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { getCurrentUser })(App);
