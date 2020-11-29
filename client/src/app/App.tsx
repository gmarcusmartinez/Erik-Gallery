import React, { FC } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as screens from "screens";
import Navigation from "components/Navigation";
import { getCurrentUser } from "store/actions/auth";
import { PRoute } from "components/ProtectedRoute";
import Modal from "components/Modal";

interface IProps {
  getCurrentUser: Function;
  currentUser: { role: string };
}

const App: FC<IProps> = ({ getCurrentUser, currentUser }) => {
  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <div className="app">
      <Navigation />
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={screens.LandingScreen} />
          <Route exact path="/admin/" component={screens.AdminScreen} />
          <Route exact path="/contact/" component={screens.ContactScreen} />
          <Route exact path="/sound/" component={screens.SoundScreen} />

          <Route exact path="/prints/" component={screens.PrintsScreen} />
          <Route exact path="/prints/:page" component={screens.PrintsScreen} />

          <Route exact path="/signout" component={screens.LogoutScreen} />
          <PRoute
            path="/dashboard"
            currentUser={currentUser}
            component={screens.Dashboard}
          />
        </Switch>
      </div>
      <Modal />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps, { getCurrentUser })(App);
