// src/components/Navigation/Navigation.js
import React, { useState, useEffect } from 'react';
import { SignalContactModal } from '../system/SignalContactModal';
import CreateEventModal from '../events/CreateEventModal';
import { useMediaQuery } from '../../hooks/useUtils';

function Navigation({ isMenuOpen, toggleMenu, closeMenu, currentPath, onNavigate }) {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Activities', path: '/activities' },
    { name: 'Community', path: '/community' },
    { name: 'Events', path: '/events' }
  ];

  const handleNavClick = (path) => {
    onNavigate(path);
    closeMenu();
  };

  // Handle safe area insets for mobile
  useEffect(() => {
    if (isMobile) {
      document.documentElement.style.setProperty(
        '--safe-area-inset-top',
        `${window.navigator.standalone ? '47px' : '0px'}`
      );
    }
  }, [isMobile]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        {/* Safe area padding for iOS */}
        <div className="w-full" style={{ height: 'env(safe-area-inset-top, 0px)' }} />
        
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer transform active:scale-95 transition-transform" 
              onClick={() => handleNavClick('/')}
            >
              <span className="text-xl md:text-2xl text-orange-500 flex items-center gap-2">
                <i className="fas fa-dragon"></i>
                <span className="font-bold">Dancing Dragons</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-lg transition-all duration-300 relative group ${
                    currentPath === item.path
                      ? 'text-orange-500'
                      : 'text-gray-300 hover:text-orange-400'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 
                                  group-hover:scale-x-100 transition-transform duration-300 ${
                                    currentPath === item.path ? 'scale-x-100' : ''
                                  }`} />
                </button>
              ))}
              
              <button
                onClick={() => setIsSignalModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full 
                         text-white font-semibold transition-all duration-300 
                         hover:-translate-y-1 active:transform active:scale-95"
              >
                Join Us
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white p-2 rounded-lg
                       hover:bg-gray-800/50 transition-all duration-300
                       active:transform active:scale-95"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-[calc(4rem+env(safe-area-inset-top,0px))] 
                     transition-all duration-300 ease-in-out transform ${
                       isMenuOpen
                         ? 'translate-y-0 opacity-100'
                         : '-translate-y-full opacity-0 pointer-events-none'
                     }`}
        >
          <div className="bg-gray-800/95 backdrop-blur-md shadow-xl border-t border-gray-700">
            <div className="px-4 py-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                           active:transform active:scale-95 ${
                             currentPath === item.path
                               ? 'bg-orange-500/20 text-orange-500'
                               : 'text-gray-300 hover:bg-gray-700/50'
                           }`}
                >
                  {item.name}
                </button>
              ))}
              
              <button
                onClick={() => {
                  setIsSignalModalOpen(true);
                  closeMenu();
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg
                         text-white font-semibold transition-all duration-300
                         active:transform active:scale-95 flex items-center justify-center gap-2"
              >
                <i className="fas fa-user-plus"></i>
                Join Our Community
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add spacer to prevent content from going under fixed nav */}
      <div 
        className="w-full" 
        style={{ 
          height: `calc(64px + env(safe-area-inset-top, 0px))`,
          paddingTop: 'env(safe-area-inset-top, 0px)' 
        }} 
      />

      <SignalContactModal 
        isOpen={isSignalModalOpen}
        onClose={() => setIsSignalModalOpen(false)}
      />

      <CreateEventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </>
  );
}

export default Navigation;