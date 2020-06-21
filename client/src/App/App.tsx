import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../components/Nav';
import Header from '../components/Header';
import ZineScreen from '../screens/ZineScreen';
import Mobilenav from '../components/Mobilenav';
import PrintsScreen from '../screens/PrintsScreen';
import LandingScreen from '../screens/LandingScreen';
import ProjectDetail from '../screens/ProjectDetail';
import ClothingScreen from '../screens/ClothingScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import { ThemeContext } from '../context/ThemeContext';

const App = () => {
  const [displayMobilenav, setDisplayMobilenav] = React.useState(false);

  const { theme } = React.useContext(ThemeContext);
  const bg = theme === 'light' ? '#fff' : '#212121';
  const clr = theme === 'light' ? '#585858' : '#e5e5e5';

  return (
    <div className='app' style={{ backgroundColor: bg, color: clr }}>
      <Header setDisplayMobilenav={setDisplayMobilenav} />
      <div className='container'>
        <div className='side-nav'>
          <Nav />
        </div>
        <div className='content'>
          <Switch>
            <Route exact path='/' component={LandingScreen} />
            <Route exact path='/projects/' component={ProjectsScreen} />
            <Route exact path='/projects/:id' component={ProjectDetail} />
            <Route exact path='/prints' component={PrintsScreen} />
            <Route exact path='/clothing' component={ClothingScreen} />
            <Route exact path='/zines/' component={ZineScreen} />
          </Switch>
        </div>
      </div>
      <Mobilenav
        displayMobileNav={displayMobilenav}
        setDisplayMobilenav={setDisplayMobilenav}
      />
    </div>
  );
};

export default App;
