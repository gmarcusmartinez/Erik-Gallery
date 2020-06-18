import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../components/Nav';
import Header from '../components/Header';
import ZineScreen from '../screens/ZineScreen';
import Mobilenav from '../components/Mobilenav';
import PrintsScreen from '../screens/PrintsScreen';
import ProjectDetail from '../screens/ProjectDetail';
import ClothingScreen from '../screens/ClothingScreen';
import ProjectsScreen from '../screens/ProjectsScreen';

const App = () => {
  const [displayMobilenav, setDisplayMobilenav] = React.useState(false);
  return (
    <>
      <Header setDisplayMobilenav={setDisplayMobilenav} />
      <div className='app'>
        <div className='side-nav'>
          <Nav />
        </div>
        <div className='content'>
          <Switch>
            <Route exact path='/clothing' component={ClothingScreen} />
            <Route exact path='/prints' component={PrintsScreen} />
            <Route exact path='/projects/' component={ProjectsScreen} />
            <Route exact path='/projects/:id' component={ProjectDetail} />
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
