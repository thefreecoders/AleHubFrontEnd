import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';

// import './styles/main.scss';
import Nav from './components/Nav/Nav.jsx';

const app = document.getElementById('app')

ReactDOM.render(<Nav />, app)
