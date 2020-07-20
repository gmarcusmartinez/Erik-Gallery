import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { landingImage } from 'screens/GalleryScreen/data';
import Header from 'components/Header';
import Mobilenav from 'components/Mobilenav';
import * as screens from 'screens';

const App = () => {
  const [showMobileNav, setShowMobileNav] = React.useState(true);
  const headerProps = { showMobileNav, setShowMobileNav };
  const background = `url(${landingImage}) center center`;
  return (
    <div className='app' style={{ background, backgroundSize: 'cover' }}>
      <Header {...headerProps} />
      <div className='content'>
        <Switch>
          <Route exact path='/' component={screens.LandingScreen} />
          <Route exact path='/zines/' component={screens.ZineScreen} />
          <Route exact path='/prints' component={screens.PrintsScreen} />
          <Route exact path='/sound/' component={screens.SoundScreen} />
          <Route exact path='/contact/' component={screens.ContactScreen} />
          <Route component={screens.NotFound} />
        </Switch>
      </div>
      <Mobilenav {...headerProps} />
    </div>
  );
};

export default App;
