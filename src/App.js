import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppContext } from './context/AppContext';
import { useScrollPosition, useWindowSize } from './hooks/useUtils';

// Components
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Community from './components/Community';
import FounderSection from './components/FounderSection';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  const { isMenuOpen, toggleMenu, closeMenu } = useAppContext();
  const scrollPosition = useScrollPosition();
  const { width } = useWindowSize();

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

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation 
          isMenuOpen={isMenuOpen} 
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
        
        <main className={`relative ${isMenuOpen ? 'blur-sm' : ''}`}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Activities />
                <FounderSection />
              </>
            } />
            <Route path="activities" element={<Activities fullPage={true} />} />
            <Route path="community" element={<Community />} />
          </Routes>
        </main>
        
        {scrollPosition > 400 && (
          <ScrollTopButton onClick={scrollToTop} />
        )}
      </div>
    </Router>
  );
}

export default App;