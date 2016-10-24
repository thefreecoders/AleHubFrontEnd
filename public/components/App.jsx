import React from 'react';
import { Router, Route, browserHistory} from 'react-router';

import Nav from './Nav/Nav.jsx';
import Homepage from './Homepage/Homepage.jsx';

export default class Application extends React.Component {
  render () {
    return (
      <div>
        <Nav />
        <Homepage />
      </div>
    )
  }
};
