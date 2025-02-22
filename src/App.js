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
  <div className="fixed inset-0 bg-gray-900 flex items-center justify-center">
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
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center p-4">
          <div className="max-w-lg w-full bg-gray-800/50 rounded-xl p-8">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">
              <i className="fas fa-exclamation-triangle mr-2"></i>
              Something went wrong
            </h1>
            <p className="mb-4 text-white">We're sorry - something has gone wrong with the Dancing Dragons app.</p>
            <div className="space-y-4">
              <button 
                onClick={() => window.location.reload()}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 
                         rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <i className="fas fa-sync-alt"></i>
                Reload App
              </button>
              <button 
                onClick={() => this.setState({ hasError: false })}
                className="w-full border border-orange-500 text-orange-500 px-6 py-3 
                         rounded-xl hover:bg-orange-500/10 transition-colors"
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

  // Mobile viewport height fix
  useEffect(() => {
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);

    return () => {
      window.removeEventListener('resize', setViewportHeight);
      window.removeEventListener('orientationchange', setViewportHeight);
    };
  }, []);

  // Load essential resources
  useEffect(() => {
    const loadResources = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading resources:', error);
        setIsLoading(false);
      }
    };

    loadResources();
  }, []);

  // Handle navigation
  const handleNavigate = (path) => {
    const basePath = '/dancingdragons';
    const fullPath = `${basePath}${path}`;
    setCurrentPath(path);
    window.history.pushState({}, '', fullPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu(); // Close menu on navigation
  };

  // Handle back/forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const newPath = window.location.pathname.replace('/dancingdragons', '') || '/';
      setCurrentPath(newPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Close menu on desktop
  useEffect(() => {
    if (width >= 768 && isMenuOpen) {
      closeMenu();
    }
  }, [width, isMenuOpen, closeMenu]);

  if (isLoading) {
    return <PageLoader />;
  }

  // Render current route content
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
    <div className="relative bg-gray-900">
      <Suspense fallback={<PageLoader />}>
        <Navigation 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          currentPath={currentPath}
          onNavigate={handleNavigate}
        />
      </Suspense>
      
      <main>
        {renderContent()}
      </main>
      
      {scrollPosition > 400 && (
        <Suspense fallback={null}>
          <ScrollTopButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
        </Suspense>
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