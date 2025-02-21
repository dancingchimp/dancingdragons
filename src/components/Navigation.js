// File: src/components/Navigation.js

import React from 'react';

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
              onClick={() => onNavigate('/join')}
              className={`bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full 
                         transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg
                         flex items-center gap-2 ${
                           currentPath === '/join' ? 'bg-orange-600' : ''
                         }`}
            >
              <i className="fas fa-user-plus"></i>
              Join Us
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
              onNavigate('/join');
              closeMenu();
            }}
            className="text-xl bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full 
                      transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg
                      flex items-center gap-2 justify-center"
          >
            <i className="fas fa-user-plus"></i>
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;