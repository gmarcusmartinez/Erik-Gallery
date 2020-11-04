import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as screens from "screens";
import Navigation from "components/Navigation";
import { getCurrentUser } from "store/actions/auth";
import { PRoute } from "components/ProtectedRoute";

interface IProps {
  getCurrentUser: Function;
  currentUser: { role: string };
}

const App: React.FC<IProps> = ({ getCurrentUser, currentUser }) => {
  React.useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  return (
    <>
      <Navigation />
      <div className="main-content">
        <Switch>
          <Route exact path="/" component={screens.LandingScreen} />
          <Route exact path="/admin/" component={screens.AdminScreen} />
          <Route exact path="/contact/" component={screens.ContactScreen} />
          <Route exact path="/sound/" component={screens.SoundScreen} />
          <Route exact path="/prints" component={screens.PrintsScreen} />
          <Route exact path="/signout" component={screens.LogoutScreen} />
          <PRoute
            path="/dashboard"
            currentUser={currentUser}
            component={screens.Dashboard}
          />
        </Switch>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  currentUser: state.auth.currentUser,
});
export default connect(mapStateToProps, { getCurrentUser })(App);
// <Route exact path='/zines/' component={screens.ZineScreen} />
