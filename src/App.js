// File: src/App.js

import React, { useEffect, useState } from 'react';
import { useAppContext } from './context/AppContext';
import { EventProvider } from './context/EventContext';
import { useScrollPosition, useWindowSize } from './hooks/useUtils';

// Import components
import Hero from './components/Hero';
import Activities from './components/Activities';
import Community from './components/Community';
import CommunityJoin from './components/community/CommunityJoin';
import FounderSection from './components/FounderSection';
import Events from './components/Events/Events';
import Navigation from './components/Navigation/Navigation';
import ScrollTopButton from './components/ScrollTopButton';
import { VideoLibrary } from './components/video-library/VideoLibrary';

// Toast notification component for system messages
function Toast({ message, type, onClose }) {
  const types = {
    success: {
      icon: 'fa-check-circle',
      color: 'bg-green-500'
    },
    error: {
      icon: 'fa-exclamation-circle',
      color: 'bg-red-500'
    },
    info: {
      icon: 'fa-info-circle',
      color: 'bg-blue-500'
    },
    warning: {
      icon: 'fa-exclamation-triangle',
      color: 'bg-yellow-500'
    }
  };

  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const { icon, color } = types[type] || types.info;

  return (
    <div className={`${color} text-white px-6 py-4 rounded-lg shadow-lg 
                    flex items-center justify-between gap-4 animate-fade-in`}>
      <div className="flex items-center gap-3">
        <i className={`fas ${icon}`}></i>
        <span>{message}</span>
      </div>
      <button 
        onClick={onClose}
        className="text-white/80 hover:text-white transition-colors"
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
}

// Toast container for multiple notifications
function ToastContainer({ toasts, removeToast }) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 
                    flex flex-col gap-2 min-w-[300px] max-w-[600px]">
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}

function AppContent() {
  const { isMenuOpen, toggleMenu, closeMenu } = useAppContext();
  const scrollPosition = useScrollPosition();
  const { width } = useWindowSize();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState('/');
  const [toasts, setToasts] = useState([]);

  // Toast management
  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

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

  // Handle path changes
  const handleNavigate = (path) => {
    setCurrentPath(path);
    window.scrollTo(0, 0);
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
      case '/events':
        return <Events />;
      case '/join':
        return <CommunityJoin onNotification={addToast} />;
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
        onNavigate={handleNavigate}
        onNotification={addToast}
      />
      
      <main className={`relative transition-all duration-300 ${isMenuOpen ? 'blur-sm' : ''}`}>
        <div className="transition-opacity duration-300 ease-in-out">
          {renderContent()}
        </div>
      </main>
      
      {/* Scroll to top button */}
      <div className={`fixed bottom-8 right-8 transition-all duration-300 transform
        ${scrollPosition > 400 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {scrollPosition > 400 && (
          <ScrollTopButton onClick={scrollToTop} />
        )}
      </div>

      {/* Toast notifications */}
      <ToastContainer 
        toasts={toasts}
        removeToast={removeToast}
      />
    </div>
  );
}

function App() {
  return (
    <EventProvider>
      <AppContent />
    </EventProvider>
  );
}

export default App;