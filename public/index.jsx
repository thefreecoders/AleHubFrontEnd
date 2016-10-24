import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';

require('./styles/scss/master.scss');
import Nav from './components/Nav/Nav.jsx';

const APP = document.getElementById('APP')

ReactDOM.render(<Nav />, APP)
