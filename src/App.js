// src/App.js

import React, { useState, Suspense } from 'react';
import { AppProvider } from './context/AppContext';
import { EventProvider } from './context/EventContext';

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
  <div className="flex items-center justify-center h-screen">
    <i className="fas fa-dragon text-orange-500 text-5xl" />
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
    <>
      <Navigation 
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />
      {renderContent()}
    </>
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