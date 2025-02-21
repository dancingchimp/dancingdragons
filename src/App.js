// File: src/App.js

import React, { useEffect, useState } from 'react';
import { useAppContext } from './context/AppContext';
import { useScrollPosition, useWindowSize } from './hooks/useUtils';

// Import components
import Hero from './components/Hero';
import Activities from './components/Activities';
import Community from './components/Community';
import CommunityJoin from './components/community/CommunityJoin';
import FounderSection from './components/FounderSection';
import { VideoLibrary } from './components/video-library/VideoLibrary';

// Import Navigation and ScrollTopButton components
import Navigation from './components/Navigation';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  const { isMenuOpen, toggleMenu, closeMenu } = useAppContext();
  const scrollPosition = useScrollPosition();
  const { width } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (width >= 768 && isMenuOpen) {
      closeMenu();
    }
  }, [width, isMenuOpen, closeMenu]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center opacity-100 transform transition-all duration-500">
          <i className="fas fa-dragon text-orange-500 text-5xl mb-4 float"></i>
          <p className="text-white text-xl">Loading Dancing Dragons...</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentPath) {
      case '/activities':
        return <Activities fullPage={true} />;
      case '/community':
        return <Community />;
      case '/join':
        return <CommunityJoin />;
      case '/library':
        return (
          <div className="pt-16">
            <VideoLibrary fullPage={true} />
          </div>
        );
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
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        currentPath={currentPath}
        onNavigate={setCurrentPath}
      />
      
      <main className={`relative transition-all duration-300 ${isMenuOpen ? 'blur-sm' : ''}`}>
        <div className="transition-opacity duration-300 ease-in-out">
          {renderContent()}
        </div>
      </main>
      
      <div className={`fixed bottom-8 right-8 transition-all duration-300 transform
        ${scrollPosition > 400 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {scrollPosition > 400 && (
          <ScrollTopButton onClick={scrollToTop} />
        )}
      </div>
    </div>
  );
}

export default App;