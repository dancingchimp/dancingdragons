import React, { useState } from 'react';
import { SignalContactModal } from '../system/SignalContactModal';

function Navigation({ isMenuOpen, toggleMenu, closeMenu, currentPath, onNavigate }) {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);

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

  return (
    <>
      {/* Mobile-optimized header */}
      <header className="bg-[#1a202c] fixed top-0 left-0 right-0 z-50">
        {/* Top nav bar */}
        <nav className="h-12 px-4 flex items-center justify-between border-b border-gray-800">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer touch-manipulation"
            onClick={() => handleNavClick('/')}
          >
            <i className="fas fa-dragon text-orange-500 text-base md:text-xl mr-2" />
            <span className="text-sm md:text-base font-bold text-white">Dancing Dragons</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`text-sm font-medium transition-colors ${
                  currentPath === item.path ? 'text-orange-500' : 'text-gray-300 hover:text-orange-400'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setIsSignalModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 px-4 py-1.5 rounded-full 
                       text-white text-sm font-semibold transition-colors"
            >
              Join Us
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-300 hover:text-white touch-manipulation"
            aria-label="Menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`} />
          </button>
        </nav>

        {/* Mobile menu */}
        <div 
          className={`md:hidden bg-[#1a202c] border-b border-gray-800 
                     transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0 invisible'} 
                     overflow-hidden`}
        >
          <div className="px-4 py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-2 rounded-lg text-base
                           touch-manipulation transition-colors ${
                  currentPath === item.path
                    ? 'bg-orange-500/20 text-orange-500'
                    : 'text-gray-300 hover:bg-gray-800'
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
              className="w-full bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg
                       text-white font-semibold transition-colors flex items-center 
                       justify-center gap-2 touch-manipulation"
            >
              <i className="fas fa-user-plus" />
              Join Our Community
            </button>
          </div>
        </div>
      </header>

      {/* Header spacer */}
      <div className="h-12" />

      <SignalContactModal 
        isOpen={isSignalModalOpen}
        onClose={() => setIsSignalModalOpen(false)}
      />
    </>
  );
}

export default Navigation;