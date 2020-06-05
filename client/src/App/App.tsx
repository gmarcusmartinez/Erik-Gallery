import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../screens/Landing/Landing';

const App = () => {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </div>
  );
};

export default App;
