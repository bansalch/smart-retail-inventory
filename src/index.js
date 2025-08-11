// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css'; // Your Tailwind/app styles
import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
