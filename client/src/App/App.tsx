import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Sidenav from '../components/Sidenav/Sidenav';
import Mobilenav from '../components/Mobilenav/Mobilenav';
import ClothingScreen from '../screens/ClothingScreen';
import PrintsScreen from '../screens/PrintsScreen/PrintsScreen';

const App = () => {
  const [displayMobilenav, setDisplayMobilenav] = React.useState(false);
  return (
    <>
      <Header setDisplayMobilenav={setDisplayMobilenav} />
      <div className='landing'>
        <Sidenav />
        <div className='content'>
          <Switch>
            <Route exact path='/clothing' component={ClothingScreen} />
            <Route exact path='/prints' component={PrintsScreen} />
          </Switch>
        </div>
      </div>
      {displayMobilenav ? (
        <Mobilenav setDisplayMobilenav={setDisplayMobilenav} />
      ) : null}
    </>
  );
};

export default App;
