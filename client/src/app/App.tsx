import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as screens from "screens";
import { fetchPrints } from "store/actions/prints/fetchPrints";

interface IProps {
  fetchPrints: Function;
}

const App: React.FC<IProps> = ({ fetchPrints }) => {
  useEffect(() => {
    fetchPrints();
  }, [fetchPrints]);

  return (
    <>
      <Switch>
        <Route exact path="/" component={screens.LandingScreen} />
        {/* <Route exact path="/admin/" component={screens.AdminScreen} />
        <Route exact path="/contact/" component={screens.ContactScreen} />
        <Route exact path="/sound/" component={screens.SoundScreen} />
        <Route exact path="/prints" component={screens.PrintsScreen} />
        <Route exact path="/signout" component={screens.LogoutScreen} />
        <Route component={screens.DashboardScreen} /> */}
      </Switch>
    </>
  );
};

export default connect(null, { fetchPrints })(App);
