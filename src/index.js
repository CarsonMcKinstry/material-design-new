import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'material-components-web/dist/material-components-web.min.css';
import './index.scss';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
