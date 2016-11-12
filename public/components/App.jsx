import React from 'react';
import { Router, Route, hashHistory} from 'react-router';

import Nav from './Nav/Nav.jsx';
import Homepage from './Homepage/Homepage.jsx';
import Brewers from './Brewers/Brewers.jsx';
import Beer from './Beer/Beer.jsx';

// TODO: Put back In
// <Homepage />
// <Brewers />

export default class Application extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Beer/>
      </div>
    )
  }
};
