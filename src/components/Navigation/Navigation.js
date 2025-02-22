import React, { useState, useEffect } from 'react';
import { SignalContactModal } from '../system/SignalContactModal';
import { useMediaQuery } from '../../hooks/useUtils';

function Navigation({ isMenuOpen, toggleMenu, closeMenu, currentPath, onNavigate }) {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
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

  // Handle body scroll lock when menu is open
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen, isMobile]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-gray-900">
        {/* Status Bar Background - Critical for mobile */}
        <div 
          className="w-full bg-gray-900" 
          style={{ height: 'env(safe-area-inset-top, 0px)' }} 
        />
        
        {/* Navigation Bar */}
        <nav className="relative bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <div 
                className="flex items-center cursor-pointer transform active:scale-95 transition-transform tap-highlight-none"
                onClick={() => handleNavClick('/')}
              >
                <i className="fas fa-dragon text-orange-500 text-xl md:text-2xl mr-2" />
                <span className="text-base md:text-xl font-bold text-white">
                  Dancing Dragons
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
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform 
                                    scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
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

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg
                         transition-colors tap-highlight-none touch-manipulation"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-x-0 top-[calc(3.5rem+env(safe-area-inset-top,0px))] 
                     bottom-0 bg-gray-800/95 menu-backdrop transform transition-transform 
                     duration-300 ease-in-out ${
                       isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                     }`}
        >
          <div className="px-4 py-6 space-y-4 mobile-menu-height custom-scrollbar">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                         active:transform active:scale-95 tap-highlight-none ${
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
                       active:transform active:scale-95 flex items-center 
                       justify-center gap-2 tap-highlight-none"
            >
              <i className="fas fa-user-plus" />
              Join Our Community
            </button>
          </div>
        </div>
      </header>

      {/* Header Spacer - Critical for layout */}
      <div 
        className="w-full bg-gray-900" 
        style={{ 
          height: 'calc(3.5rem + env(safe-area-inset-top, 0px))'
        }} 
      />

      {/* Signal Modal */}
      <SignalContactModal 
        isOpen={isSignalModalOpen}
        onClose={() => setIsSignalModalOpen(false)}
      />
    </>
  );
}

export default Navigation;