import React, { useState } from 'react';
import { SignalContactModal } from '../system/SignalContactModal';

function Navigation({ isMenuOpen, toggleMenu, closeMenu, currentPath, onNavigate }) {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation - Hidden on Mobile */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm">
        <nav className="h-16 px-4 flex items-center justify-between">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate('/')}
          >
            <i className="fas fa-dragon text-orange-500 text-2xl mr-2" />
            <span className="text-xl font-bold text-white">Dancing Dragons</span>
          </div>

          <div className="flex items-center gap-8">
            <button onClick={() => onNavigate('/')}>Home</button>
            <button onClick={() => onNavigate('/activities')}>Activities</button>
            <button onClick={() => onNavigate('/community')}>Community</button>
            <button onClick={() => onNavigate('/events')}>Events</button>
            <button
              onClick={() => setIsSignalModalOpen(true)}
              className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full 
                       text-white font-semibold transition-colors"
            >
              Join Us
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Floating Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-orange-500 text-white 
                 w-12 h-12 rounded-full shadow-lg flex items-center justify-center 
                 focus:outline-none active:transform active:scale-95"
        aria-label="Menu"
      >
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`} />
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-sm flex items-center justify-center">
          <div className="w-full max-w-sm mx-auto p-6">
            <div className="space-y-4">
              <button
                onClick={() => onNavigate('/')}
                className="w-full bg-gray-800/50 px-6 py-3 rounded-lg text-left text-lg"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('/activities')}
                className="w-full bg-gray-800/50 px-6 py-3 rounded-lg text-left text-lg"
              >
                Activities
              </button>
              <button
                onClick={() => onNavigate('/community')}
                className="w-full bg-gray-800/50 px-6 py-3 rounded-lg text-left text-lg"
              >
                Community
              </button>
              <button
                onClick={() => onNavigate('/events')}
                className="w-full bg-gray-800/50 px-6 py-3 rounded-lg text-left text-lg"
              >
                Events
              </button>
              <button
                onClick={() => {
                  setIsSignalModalOpen(true);
                  closeMenu();
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg
                         text-white font-semibold text-lg flex items-center justify-center gap-2"
              >
                <i className="fas fa-user-plus" />
                Join Our Community
              </button>
            </div>
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