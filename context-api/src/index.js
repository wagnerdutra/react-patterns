import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';
import App, { AppFunction } from './App';

ReactDOM.render(
  <div style={{ display: 'flex', justifyContent: 'space-between', width: '500px' }}>
    <App />
    <AppFunction />
  </div>,
  document.getElementById('root')
);
