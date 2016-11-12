import React from 'react';
import { Router, Route, hashHistory} from 'react-router';

import Nav from './Nav/Nav.jsx';
import Homepage from './Homepage/Homepage.jsx';
import Brewers from './Brewers/Brewers.jsx';


export default class Application extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
};
