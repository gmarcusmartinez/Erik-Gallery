import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../components/Header/Header';
import Nav from '../components/Nav/Nav';
import Mobilenav from '../components/Mobilenav/Mobilenav';
import ClothingScreen from '../screens/ClothingScreen';
import PrintsScreen from '../screens/PrintsScreen/PrintsScreen';
import ProjectScreen from '../screens/ProjectScreen/ProjectScreen';
import Toggle from '../components/Toggle';
import ZineScreen from '../screens/ZineScreen/ZineScreen';

const App = () => {
  const [displayMobilenav, setDisplayMobilenav] = React.useState(false);
  return (
    <>
      <Header setDisplayMobilenav={setDisplayMobilenav} />
      <div className='app'>
        <div className='sidenav'>
          <Nav />
          <Toggle />
        </div>
        <div className='content'>
          <Switch>
            <Route exact path='/clothing' component={ClothingScreen} />
            <Route exact path='/prints' component={PrintsScreen} />
            <Route exact path='/projects/:id' component={ProjectScreen} />
            <Route exact path='/zines/' component={ZineScreen} />
          </Switch>
        </div>
      </div>
      <Mobilenav
        displayMobileNav={displayMobilenav}
        setDisplayMobilenav={setDisplayMobilenav}
      />
    </>
  );
};

export default App;
