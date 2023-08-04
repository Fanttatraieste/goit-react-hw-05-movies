import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from 'App';
import { BrowserRouter } from 'react-router-dom';

// const dotenv = require('dotenv');
// dotenv.config({ path: '../config.env' });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
