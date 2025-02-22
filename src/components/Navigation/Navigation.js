import React, { useState, useEffect } from 'react';
import { SignalContactModal } from '../system/SignalContactModal';

function Navigation({ currentPath, onNavigate }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showMenu]);

  const handleNavClick = (path) => {
    onNavigate(path);
    setShowMenu(false);
  };

  return (
    <>
      {/* Simple top bar with minimal height */}
      <div className="bg-gray-900/90 backdrop-blur-sm h-12 flex items-center justify-between px-4 relative z-40">
        <button 
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2"
        >
          <i className="fas fa-dragon text-orange-500 text-xl" />
          <span className="font-bold text-white">Dancing Dragons</span>
        </button>
        
        <button
          onClick={() => setShowMenu(true)}
          className="text-white p-2"
        >
          <i className="fas fa-bars text-xl" />
        </button>
      </div>

      {/* Fullscreen overlay menu that slides up from bottom */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-gray-900">
          {/* Header */}
          <div className="h-12 flex items-center justify-between px-4 border-b border-gray-800">
            <span className="font-bold text-white">Menu</span>
            <button
              onClick={() => setShowMenu(false)}
              className="text-white p-2"
            >
              <i className="fas fa-times text-xl" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="p-4 h-[calc(100vh-48px)] flex flex-col">
            {/* Navigation Links */}
            <nav className="space-y-2">
              {[
                { path: '/', label: 'Home', icon: 'fa-home' },
                { path: '/activities', label: 'Activities', icon: 'fa-mountain' },
                { path: '/community', label: 'Community', icon: 'fa-users' },
                { path: '/events', label: 'Events', icon: 'fa-calendar' }
              ].map(({ path, label, icon }) => (
                <button
                  key={path}
                  onClick={() => handleNavClick(path)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg transition-colors
                             ${currentPath === path ? 
                               'bg-orange-500 text-white' : 
                               'text-gray-300 hover:bg-gray-800'}`}
                >
                  <i className={`fas ${icon} w-6`} />
                  <span className="text-lg">{label}</span>
                </button>
              ))}
            </nav>

            {/* Bottom Section */}
            <div className="mt-auto space-y-4">
              <button
                onClick={() => {
                  setIsSignalModalOpen(true);
                  setShowMenu(false);
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white 
                         py-4 rounded-lg text-lg font-semibold
                         flex items-center justify-center gap-2"
              >
                <i className="fas fa-user-plus" />
                Join Our Community
              </button>

              <div className="text-center text-sm text-gray-400">
                <i className="fas fa-shield-alt mr-2" />
                Privacy Protected • Zero Data Storage
              </div>
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