// src/App.js

import React, { useState, Suspense } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { EventProvider } from './context/EventContext';
import { useMediaQuery } from './hooks/useUtils';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero'));
const Activities = React.lazy(() => import('./components/Activities'));
const Community = React.lazy(() => import('./components/Community'));
const CommunityJoin = React.lazy(() => import('./components/community/CommunityJoin'));
const FounderSection = React.lazy(() => import('./components/FounderSection'));
const Events = React.lazy(() => import('./components/events'));
const Navigation = React.lazy(() => import('./components/Navigation/Navigation'));

// Simple loading component
const PageLoader = () => (
  <div className="bg-gray-900 min-h-screen flex items-center justify-center">
    <i className="fas fa-dragon text-orange-500 text-5xl" />
  </div>
);

function AppContent() {
  const { isMenuOpen, toggleMenu, closeMenu } = useAppContext();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigate = (path) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
    closeMenu();
  };

  // Simplified content rendering
  const renderContent = () => {
    const routes = {
      '/': (
        <>
          <Hero />
          <Activities />
          <FounderSection />
        </>
      ),
      '/activities': <Activities fullPage={true} />,
      '/community': <Community />,
      '/events': <Events />,
      '/join': <CommunityJoin />
    };

    return routes[currentPath] || routes['/'];
  };

  return (
    <div className="bg-gray-900">
      <Suspense fallback={<PageLoader />}>
        <Navigation 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
          currentPath={currentPath}
          onNavigate={handleNavigate}
          isMobile={isMobile}
        />
        {renderContent()}
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <EventProvider>
        <AppContent />
      </EventProvider>
    </AppProvider>
  );
}

export default App;