// src/App.js

import React, { useState, Suspense, useEffect } from 'react';
import { AppProvider } from './context/AppContext';
import { EventProvider } from './context/EventContext';
import { CompleteVisualSystem, useMousePosition } from './components/visuals/EnhancedVisuals';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero'));
const Activities = React.lazy(() => import('./components/Activities'));
const Community = React.lazy(() => import('./components/Community'));
const CommunityJoin = React.lazy(() => import('./components/community/CommunityJoin'));
const FounderSection = React.lazy(() => import('./components/FounderSection'));
const Events = React.lazy(() => import('./components/events'));
const Navigation = React.lazy(() => import('./components/Navigation/Navigation'));

const PageLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 relative overflow-hidden">
      <CompleteVisualSystem />
      <div className="relative z-10 text-center space-y-8">
        <div className="relative">
          <i className="fas fa-dragon text-6xl text-orange-500 animate-float" />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 
                       bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
        </div>
        <div className="relative w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="absolute h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-gray-300 text-lg font-light tracking-wider">
          {progress === 100 ? "Ready to party" : "Loading the vibe"}
        </div>
      </div>
    </div>
  );
};

function AppContent() {
  const [currentPath, setCurrentPath] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (path) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => setIsTransitioning(false), 500);
    }, 300);
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
      {/* Visual Effects */}
      <CompleteVisualSystem />

      {/* Content */}
      <div 
        className={`relative z-10 transition-all duration-500
                   ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}
                   ${scrolled ? 'bg-gray-900/50 backdrop-blur-sm' : ''}`}
      >
        <Navigation 
          currentPath={currentPath}
          onNavigate={handleNavigate}
          isScrolled={scrolled}
        />
        
        <main className="relative">
          {renderContent()}
        </main>

        {/* Scroll to Top Button */}
        {scrolled && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 bg-orange-500/10 hover:bg-orange-500/20 
                     p-4 rounded-full text-orange-500 transition-all duration-300 
                     hover:scale-110 group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 
                         to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <i className="fas fa-arrow-up relative z-10" />
          </button>
        )}
      </div>

      {/* Page Transition Overlay */}
      <div 
        className={`fixed inset-0 bg-black pointer-events-none transition-opacity duration-300
                   ${isTransitioning ? 'opacity-50' : 'opacity-0'}`}
      />
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