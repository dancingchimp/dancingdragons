// src/components/Navigation/Navigation.js

import React, { useState } from 'react';
import { SignalContactModal } from '../system/SignalContactModal';

function Navigation({ isMenuOpen, toggleMenu, closeMenu, currentPath, onNavigate }) {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);

  return (
    <>
      {/* Basic header bar with no position:fixed */}
      <header className="w-full bg-[#1a202c]">
        <div className="flex items-center justify-between h-14 px-4">
          {/* Logo */}
          <div 
            onClick={() => onNavigate('/')}
            className="cursor-pointer flex items-center"
          >
            <i className="fas fa-dragon text-orange-500 text-xl" />
            <span className="text-lg font-bold text-white ml-2">Dancing Dragons</span>
          </div>

          {/* Menu button */}
          <button 
            onClick={toggleMenu}
            className="text-gray-300 p-2"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
          </button>
        </div>

        {/* Mobile menu - slides down when open */}
        <div 
          className={`w-full transform transition-all duration-300 ease-in-out overflow-hidden
                     ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="bg-[#1a202c] p-4 space-y-4">
            <div className="space-y-2">
              <button
                onClick={() => {
                  onNavigate('/');
                  closeMenu();
                }}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 rounded"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('/activities');
                  closeMenu();
                }}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 rounded"
              >
                Activities
              </button>
              <button
                onClick={() => {
                  onNavigate('/community');
                  closeMenu();
                }}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 rounded"
              >
                Community
              </button>
              <button
                onClick={() => {
                  onNavigate('/events');
                  closeMenu();
                }}
                className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 rounded"
              >
                Events
              </button>
            </div>

            <button
              onClick={() => {
                setIsSignalModalOpen(true);
                closeMenu();
              }}
              className="w-full bg-orange-500 text-white font-semibold py-3 px-4 rounded"
            >
              Join Community
            </button>
          </div>
        </div>
      </header>

      <SignalContactModal 
        isOpen={isSignalModalOpen}
        onClose={() => setIsSignalModalOpen(false)}
      />
    </>
  );
}

export default Navigation;