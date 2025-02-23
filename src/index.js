// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // This is correct since App.js is in src/
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Remove loading indicator
const loadingElement = document.querySelector('.loading');
if (loadingElement) {
  loadingElement.style.opacity = '0';
  setTimeout(() => loadingElement.remove(), 500);
}