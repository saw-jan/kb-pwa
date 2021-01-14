import React from 'react';
import {
  Route,
  HashRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import MainApp from './MainApp';
import SingleSong from './SingleSong';

const AppContainer = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/:category/:id" component={SingleSong} />
        <Route path="/" component={MainApp} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default AppContainer;
