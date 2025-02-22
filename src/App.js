// src/App.js

import React, { useEffect, useState, Suspense, lazy } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { EventProvider } from './context/EventContext';
import { useScrollPosition, useWindowSize, useMediaQuery } from './hooks/useUtils';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const Activities = lazy(() => import('./components/Activities'));
const Community = lazy(() => import('./components/Community'));
const CommunityJoin = lazy(() => import('./components/community/CommunityJoin'));
const FounderSection = lazy(() => import('./components/FounderSection'));
const Events = lazy(() => import('./components/events'));
const Navigation = lazy(() => import('./components/Navigation/Navigation'));
const ScrollTopButton = lazy(() => import('./components/ScrollTopButton'));
const VideoLibrary = lazy(() => import('./components/video-library/VideoLibrary'));

// Loading components
const PageLoader = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="text-center">
      <i className="fas fa-dragon text-orange-500 text-5xl mb-4 float"></i>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white text-xl">Loading Dancing Dragons...</p>
      </div>
    </div>
  </div>
);

// Error boundary for the entire app
class AppErrorBoundary extends React.Component {
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
            <div className="space-y-4">
              <button 
                onClick={() => window.location.reload()}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 
                         rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <i className="fas fa-sync-alt"></i>
                Reload App
              </button>
              <button 
                onClick={() => this.setState({ hasError: false })}
                className="w-full border border-orange-500 text-orange-500 px-6 py-3 
                         rounded-lg hover:bg-orange-500/10 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function AppContent() {
  const { isMenuOpen, toggleMenu, closeMenu } = useAppContext();
  const scrollPosition = useScrollPosition();
  const { width } = useWindowSize();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(() => {
    const path = window.location.pathname.replace('/dancingdragons', '');
    return path || '/';
  });

  // Load essential resources and handle initialization
  useEffect(() => {
    const loadResources = async () => {
      try {
        // Add a small minimum delay to prevent flash
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Initialize performance monitoring if enabled
        if (process.env.REACT_APP_PERFORMANCE_MONITORING === 'true') {
          const { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals');
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error loading resources:', error);
        setIsLoading(false);
      }
    };

    loadResources();
  }, []);

  // Handle path changes
  const handleNavigate = (path) => {
    const basePath = '/dancingdragons';
    const fullPath = `${basePath}${path}`;
    setCurrentPath(path);
    window.history.pushState({}, '', fullPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen for popstate events (browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname.replace('/dancingdragons', '') || '/';
      setCurrentPath(newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Handle menu state
  useEffect(() => {
    if (width >= 768 && isMenuOpen) {
      closeMenu();
    }
  }, [width, isMenuOpen, closeMenu]);

  // Handle body scroll lock when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  if (isLoading) {
    return <PageLoader />;
  }

  const renderContent = () => {
    const components = {
      '/activities': <Activities fullPage={true} />,
      '/community': <Community />,
      '/events': <Events />,
      '/join': <CommunityJoin />,
      '/library': <VideoLibrary fullPage={true} />,
      '/': (
        <>
          <Hero />
          <Activities />
          <FounderSection />
        </>
      )
    };

    const Component = components[currentPath];
    if (!Component) {
      handleNavigate('/');
      return null;
    }

    return (
      <Suspense fallback={<PageLoader />}>
        {Component}
      </Suspense>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Suspense fallback={<PageLoader />}>
        <Navigation 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          currentPath={currentPath}
          onNavigate={handleNavigate}
        />
      </Suspense>
      
      <main className={`relative transition-all duration-300 ${isMenuOpen ? 'blur-sm' : ''}`}>
        <div className="transition-opacity duration-300 ease-in-out">
          {renderContent()}
        </div>
      </main>
      
      {scrollPosition > 400 && (
        <Suspense fallback={null}>
          <ScrollTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </Suspense>
      )}

      {/* Performance monitoring beacon */}
      {process.env.NODE_ENV === 'production' && (
        <div id="performance-beacon" style={{ display: 'none' }} />
      )}
    </div>
  );
}

function App() {
  return (
    <AppErrorBoundary>
      <AppProvider>
        <EventProvider>
          <AppContent />
        </EventProvider>
      </AppProvider>
    </AppErrorBoundary>
  );
}

export default App;