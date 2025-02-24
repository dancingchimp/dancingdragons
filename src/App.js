// File: src/App.js
// Location: src/App.js

import React, { useState, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { EventProvider } from './context/EventContext';
import { CompleteVisualSystem, useMousePosition } from './components/visuals/EnhancedVisuals';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero'));
const Activities = React.lazy(() => import('./components/Activities'));
const Community = React.lazy(() => import('./components/Community'));
const CommunityJoin = React.lazy(() => import('./components/community/CommunityJoin'));
const FounderSection = React.lazy(() => import('./components/FounderSection'));
const Events = React.lazy(() => import('./components/events/Events'));
const Navigation = React.lazy(() => import('./components/Navigation/Navigation'));
const ScrollTopButton = React.lazy(() => import('./components/ScrollTopButton'));

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

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <Activities />
    <FounderSection />
  </>
);

function AppContent() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle route transitions
  useEffect(() => {
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [location.pathname]);

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
        <Navigation isScrolled={scrolled} />
        
        <main className="relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/activities" element={<Activities fullPage={true} />} />
            <Route path="/community" element={<Community />} />
            <Route path="/join" element={<CommunityJoin />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Scroll to Top Button */}
        {scrolled && (
          <ScrollTopButton 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
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