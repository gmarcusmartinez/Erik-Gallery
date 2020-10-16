import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "components/Header";
import Mobilenav from "components/Mobilenav";
import * as screens from "screens";

const App = () => {
  const [showMobileNav, setShowMobileNav] = React.useState(false);
  const headerProps = { showMobileNav, setShowMobileNav };
  return (
    <div className={`app ${showMobileNav ? "lock" : ""}`}>
      <Header {...headerProps} />
      <div className="main">
        <Switch>
          <Route exact path="/" component={screens.LandingScreen} />
          <Route exact path="/cart/" component={screens.CartScreen} />
          <Route exact path="/zines/" component={screens.ZineScreen} />
          <Route exact path="/prints" component={screens.PrintsScreen} />
          <Route exact path="/sound/" component={screens.SoundScreen} />
          <Route exact path="/contact/" component={screens.ContactScreen} />
          <Route component={screens.NotFound} />
        </Switch>
      </div>
      <Mobilenav {...headerProps} />
    </div>
  );
};

export default App;
