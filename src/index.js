import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/AppContext';
import './styles/index.css';

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', error, errorInfo);
    this.setState({ errorInfo });
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
            <p className="mb-4">We're sorry - something's gone wrong with the Dancing Dragons app.</p>
            <div className="bg-gray-900 p-4 rounded mb-4 overflow-auto max-h-48">
              <p className="text-sm text-orange-300 font-mono">
                {this.state.error && this.state.error.toString()}
              </p>
            </div>
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

// Performance monitoring
const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Initialize the app
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Strict mode helps with development-only checks
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// Monitor performance if enabled in environment settings
if (process.env.REACT_APP_PERFORMANCE_MONITORING === 'true') {
  reportWebVitals(console.log);
}

// Handle unhandled promise rejections globally
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled Promise Rejection:', event.reason);
});

// Remove loading indicator once app is rendered
const loadingElement = document.querySelector('.loading');
if (loadingElement) {
  // Fade out and remove
  loadingElement.style.transition = 'opacity 0.5s ease';
  loadingElement.style.opacity = '0';
  setTimeout(() => {
    loadingElement.remove();
  }, 500);
}

// Register service worker for PWA support in production
if (process.env.NODE_ENV === 'production' && process.env.REACT_APP_ENABLE_PWA === 'true') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/dancingdragons/service-worker.js')
        .then(registration => {
          console.log('ServiceWorker registered successfully:', registration.scope);
        })
        .catch(error => {
          console.error('ServiceWorker registration failed:', error);
        });
    });
  }
}
