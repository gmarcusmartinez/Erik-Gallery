import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Landing from '../screens/Landing/Landing';
import Mobilenav from '../components/Mobilenav/Mobilenav';
import ProjectDetail from '../screens/ProjectDetail/ProjectDetail';

const App = () => {
  const [displayMobilenav, setDisplayMobilenav] = React.useState(false);
  return (
    <>
      <Header setDisplayMobilenav={setDisplayMobilenav} />
      {displayMobilenav ? (
        <Mobilenav setDisplayMobilenav={setDisplayMobilenav} />
      ) : null}
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/project/:_id' component={ProjectDetail} />
      </Switch>
    </>
  );
};

export default App;
