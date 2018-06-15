import jquery from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
window.$ = window.jQuery = jquery;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
