import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App color="orange" /><App color="green" /> <App color="red" /></div>, document.getElementById('root'));
registerServiceWorker();
