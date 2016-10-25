import React from 'react';
import { Router, Route, browserHistory} from 'react-router';

import Nav from './Nav/Nav.jsx';
import Homepage from './Homepage/Homepage.jsx';
import Brewers from './Brewers/Brewers.jsx';

// TODO: Put back In <Homepage />

export default class Application extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Brewers />
      </div>
    )
  }
};
