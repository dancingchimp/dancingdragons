// File: src/index.js
// Location: src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>
);

// Remove loading indicator with a slight delay to ensure the app has loaded
window.addEventListener('load', () => {
  const loadingElement = document.querySelector('.loading');
  if (loadingElement) {
    setTimeout(() => {
      loadingElement.style.opacity = '0';
      setTimeout(() => loadingElement.remove(), 500);
    }, 200);
  }
});