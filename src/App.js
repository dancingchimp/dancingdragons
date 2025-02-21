import React, { useEffect, useState } from 'react';
import { useAppContext } from './context/AppContext';
import { useScrollPosition, useWindowSize } from './hooks/useUtils';

// Import components
import Hero from './components/Hero';
import Activities from './components/Activities';
import Community from './components/Community';
import FounderSection from './components/FounderSection';
import { VideoLibrary } from './components/video-library/VideoLibrary';

// Navigation component
function Navigation({ isMenuOpen, toggleMenu, closeMenu, currentPath, onNavigate }) {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onNavigate('/')} 
            className="flex items-center"
          >
            <i className="fas fa-dragon text-orange-500 text-2xl mr-2"></i>
            <span className="text-white text-xl font-bold">Dancing Dragons</span>
          </button>

          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => onNavigate('/activities')}
              className={`text-white hover:text-orange-500 transition-colors ${
                currentPath === '/activities' ? 'text-orange-500' : ''
              }`}
            >
              Activities
            </button>
            <button 
              onClick={() => onNavigate('/community')}
              className={`text-white hover:text-orange-500 transition-colors ${
                currentPath === '/community' ? 'text-orange-500' : ''
              }`}
            >
              Community
            </button>
            <button 
              onClick={() => onNavigate('/library')}
              className={`bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full 
                         transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg
                         flex items-center gap-2 ${
                           currentPath === '/library' ? 'bg-orange-600' : ''
                         }`}
            >
              <i className="fas fa-play-circle"></i>
              Library
            </button>
          </div>

          <button
            className="md:hidden p-2 text-white hover:text-orange-500 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300`}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`
        fixed inset-0 bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}
        md:hidden pt-16
      `}>
        <div className="flex flex-col items-center space-y-8 p-8">
          <button 
            onClick={() => {
              onNavigate('/activities');
              closeMenu();
            }}
            className="text-xl text-white hover:text-orange-500 transition-colors"
          >
            Activities
          </button>
          <button 
            onClick={() => {
              onNavigate('/community');
              closeMenu();
            }}
            className="text-xl text-white hover:text-orange-500 transition-colors"
          >
            Community
          </button>
          <button 
            onClick={() => {
              onNavigate('/library');
              closeMenu();
            }}
            className="text-xl bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full 
                      transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg
                      flex items-center gap-2 justify-center"
          >
            <i className="fas fa-play-circle"></i>
            Library
          </button>
        </div>
      </div>
    </nav>
  );
}

// ScrollTopButton component
function ScrollTopButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 hover:bg-orange-600 p-3 rounded-full shadow-lg 
                 transition-all transform hover:scale-110 text-white"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

function App() {
  const { isMenuOpen, toggleMenu, closeMenu } = useAppContext();
  const scrollPosition = useScrollPosition();
  const { width } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Simulate loading state
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