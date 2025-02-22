import React, { useState } from 'react';
import { SignalContactModal } from '../system/SignalContactModal';

function Navigation({ isMenuOpen, toggleMenu, closeMenu, currentPath, onNavigate }) {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);

  return (
    <>
      {/* Simple fixed header - no transparency */}
      <header className="bg-[#1a202c] fixed top-0 left-0 right-0 z-50 h-12 border-b border-gray-800">
        <div className="flex items-center justify-between h-full px-4">
          {/* Logo - smaller on mobile */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('/')}
          >
            <i className="fas fa-dragon text-orange-500 text-base md:text-xl mr-2" />
            <span className="text-sm md:text-base font-bold text-white">Dancing Dragons</span>
          </div>

          {/* Menu button */}
          <button
            onClick={toggleMenu}
            className="text-gray-300 p-2"
            aria-label="Menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </header>

      {/* Menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-x-0 top-12 bg-[#1a202c] z-40 border-b border-gray-800">
          <div className="p-4">
            <button
              onClick={() => {
                setIsSignalModalOpen(true);
                closeMenu();
              }}
              className="w-full bg-orange-500 px-4 py-2 rounded-lg text-white font-semibold"
            >
              Join Community
            </button>
          </div>
        </div>
      )}

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