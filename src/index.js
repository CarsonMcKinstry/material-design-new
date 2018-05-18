import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import 'material-components-web/dist/material-components-web.min.css';
import './index.scss';

ReactDOM.render(
  <Router>
    <App /> 
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
