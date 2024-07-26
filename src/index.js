import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify';
import config from './aws-exports'; // Archivo generado por Amplify

Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById('root'));
