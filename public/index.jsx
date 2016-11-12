import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

require('./styles/scss/master.scss');

import Application from './components/App.jsx';
import Homepage from './components/Homepage/Homepage.jsx';
import Brewers from './components/Brewers/Brewers.jsx';
import Beers from './components/Beers/Beers.jsx';

const APP = document.getElementById('APP')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Application}>
      <IndexRoute component={Homepage} />
      <Route path="/home" component={Homepage} />
      <Route path="/beers" component={Beers} />
      <Route path="/brewers" component={Brewers} />
    </Route>
  </Router>
, APP)
