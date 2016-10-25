import React from 'react';
import ReactDOM from 'react-dom';

require('./styles/scss/master.scss');

import Application from './components/App.jsx';

const APP = document.getElementById('APP')

ReactDOM.render(<Application />, APP)
