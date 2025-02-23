// src/App.js

import React, { useState, Suspense } from 'react';
import { AppProvider } from './context/AppContext';
import { EventProvider } from './context/EventContext';
import { FestivalScene } from './components/visuals/FestivalVisuals';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero'));
const Activities = React.lazy(() => import('./components/Activities'));
const Community = React.lazy(() => import('./components/Community'));
const CommunityJoin = React.lazy(() => import('./components/community/CommunityJoin'));
const FounderSection = React.lazy(() => import('./components/FounderSection'));
const Events = React.lazy(() => import('./components/events'));
const Navigation = React.lazy(() => import('./components/Navigation/Navigation'));

// Enhanced loading component
const PageLoader = () => (
  <div className="flex items-center justify-center h-screen bg-gray-900 relative">
    <FestivalScene />
    <div className="relative z-10 text-center">
      <i className="fas fa-dragon text-orange-500 text-5xl mb-4 animate-bounce" />
      <div className="text-gray-300 animate-pulse">Loading the vibe...</div>
    </div>
  </div>
);

function AppContent() {
  const [currentPath, setCurrentPath] = useState('/');

  const handleNavigate = (path) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch(currentPath) {
      case '/activities':
        return <Activities fullPage={true} />;
      case '/community':
        return <Community />;
      case '/events':
        return <Events />;
      case '/join':
        return <CommunityJoin />;
      default:
        return (
          <>
            <Hero />
            <Activities />
            <FounderSection />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden">
      <FestivalScene />
      <div className="relative z-10">
        <Navigation 
          currentPath={currentPath}
          onNavigate={handleNavigate}
        />
        {renderContent()}
      </div>
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <EventProvider>
        <Suspense fallback={<PageLoader />}>
          <AppContent />
        </Suspense>
      </EventProvider>
    </AppProvider>
  );
}

export default App;