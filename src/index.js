// File: src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { checkRequiredComponents } from './utils/checkImports';
import './styles/index.css';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('App Error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white p-4">
          <div className="max-w-lg w-full bg-gray-800 rounded-lg p-8 shadow-xl">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">
              <i className="fas fa-exclamation-triangle mr-2"></i>
              Something went wrong
            </h1>
            <p className="mb-4">We're sorry - something has gone wrong with the Dancing Dragons app.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-all"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Check for missing components in development
if (process.env.NODE_ENV === 'development') {
  checkRequiredComponents();
}

// Initialize the app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Monitor performance if enabled
if (process.env.REACT_APP_PERFORMANCE_MONITORING === 'true') {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log);
    getFID(console.log);
    getFCP(console.log);
    getLCP(console.log);
    getTTFB(console.log);
  });
}

// Remove loading indicator
const loadingElement = document.querySelector('.loading');
if (loadingElement) {
  loadingElement.style.opacity = '0';
  setTimeout(() => loadingElement.remove(), 500);
}