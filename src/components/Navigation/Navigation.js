import React, { useState } from 'react';
import { SignalContactModal } from '../system/SignalContactModal';

function Navigation({ isMenuOpen, toggleMenu, closeMenu, currentPath, onNavigate }) {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);

  // Simple mobile-first navigation
  return (
    <>
      {/* Small, non-fixed mobile header */}
      <div className="w-full bg-gray-900 h-14 px-4 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center"
          onClick={() => onNavigate('/')}
        >
          <i className="fas fa-dragon text-orange-500 text-lg mr-2" />
          <span className="text-base font-bold text-white">Dancing Dragons</span>
        </div>

        {/* Mobile-only menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-white text-lg`} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gray-900 z-50 p-4">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center">
                <i className="fas fa-dragon text-orange-500 text-lg mr-2" />
                <span className="text-base font-bold text-white">Dancing Dragons</span>
              </div>
              <button onClick={closeMenu}>
                <i className="fas fa-times text-white text-lg" />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col gap-4">
              <button
                onClick={() => {
                  onNavigate('/');
                  closeMenu();
                }}
                className="text-left text-white text-lg py-2"
              >
                Home
              </button>
              <button
                onClick={() => {
                  onNavigate('/activities');
                  closeMenu();
                }}
                className="text-left text-white text-lg py-2"
              >
                Activities
              </button>
              <button
                onClick={() => {
                  onNavigate('/community');
                  closeMenu();
                }}
                className="text-left text-white text-lg py-2"
              >
                Community
              </button>
              <button
                onClick={() => {
                  onNavigate('/events');
                  closeMenu();
                }}
                className="text-left text-white text-lg py-2"
              >
                Events
              </button>
            </div>

            <button
              onClick={() => {
                setIsSignalModalOpen(true);
                closeMenu();
              }}
              className="w-full bg-orange-500 text-white rounded-full py-4 text-lg font-semibold mt-auto"
            >
              Join Our Community
            </button>
          </div>
        </div>
      )}

      <SignalContactModal 
        isOpen={isSignalModalOpen}
        onClose={() => setIsSignalModalOpen(false)}
      />
    </>
  );
}

export default Navigation;