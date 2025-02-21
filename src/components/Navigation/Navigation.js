// File: src/components/Navigation/Navigation.js

import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import { SignalContactModal } from '../system/SignalContactModal';

function Navigation({ currentPath, onNavigate }) {
  const { isMenuOpen, toggleMenu, closeMenu } = useAppContext();
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);

  const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'Activities', path: '/activities' },
    { name: 'Community', path: '/community' }
  ];

  const handleNavClick = (path) => {
    onNavigate(path);
    closeMenu();
  };

  const handleJoinClick = () => {
    setIsSignalModalOpen(true);
    closeMenu();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('/')}>
              <span className="text-2xl text-orange-500 flex items-center gap-2">
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
                  className={`text-lg transition-colors ${
                    currentPath === item.path
                      ? 'text-orange-500'
                      : 'text-gray-300 hover:text-orange-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              
              <button
                onClick={handleJoinClick}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full 
                         text-white font-semibold transition-all duration-300 
                         hover:-translate-y-1"
              >
                Join Us
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-300 hover:text-white p-2"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-full pointer-events-none'
          }`}
        >
          <div className="px-4 py-4 space-y-4 bg-gray-800/90 backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  currentPath === item.path
                    ? 'bg-orange-500/20 text-orange-500'
                    : 'text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {item.name}
              </button>
            ))}
            
            <button
              onClick={handleJoinClick}
              className="w-full bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg
                       text-white font-semibold transition-colors"
            >
              Join Our Community
            </button>
          </div>
        </div>
      </nav>

      <SignalContactModal 
        isOpen={isSignalModalOpen}
        onClose={() => setIsSignalModalOpen(false)}
      />
    </>
  );
}

export default Navigation;