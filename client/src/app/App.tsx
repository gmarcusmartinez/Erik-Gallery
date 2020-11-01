import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as screens from "../screens";
import Navigation from "../components/Navigation";
import { getCurrentUser } from "../store/actions/auth";

interface IProps {
  getCurrentUser: Function;
}

const App: React.FC<IProps> = ({ getCurrentUser }) => {
  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/" component={screens.LandingScreen} />
        <Route exact path="/admin/" component={screens.AdminScreen} />
        <Route exact path="/contact/" component={screens.ContactScreen} />
        <Route exact path="/sound/" component={screens.SoundScreen} />
        <Route exact path="/prints" component={screens.PrintsScreen} />
        <Route exact path="/signout" component={screens.LogoutScreen} />
        <Route component={screens.DashboardScreen} />
      </Switch>
    </>
  );
};

export default connect(null, { getCurrentUser })(App);
// <Route exact path='/zines/' component={screens.ZineScreen} />
