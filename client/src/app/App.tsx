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
          <Route path="/admin" component={screens.AdminScreen} />
          <Route path="/contact" component={screens.ContactScreen} />
          <Route path="/checkout" component={screens.CheckoutScreen} />
          <Route path="/payment/" component={screens.PaymentScreen} />
          <Route exact path="/prints/" component={screens.PrintsScreen} />
          <Route exact path="/prints/:page" component={screens.PrintsScreen} />
          <Route path="/review-order" component={screens.ReviewOrderScreen} />
          <Route path="/shipping" component={screens.ShippingScreen} />
          <Route path="/sound" component={screens.SoundScreen} />
          <Route path="/signout" component={screens.LogoutScreen} />
          <Route exact path="/zines" component={screens.ZinesScreen} />
          <Route exact path="/zines/:page" component={screens.ZinesScreen} />

          <PRoute
            path="/dashboard"
            currentUser={currentUser}
            component={screens.Dashboard}
          />
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
