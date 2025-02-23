import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SignalContactModal } from '../system/SignalContactModal';

function Navigation({ currentPath, onNavigate }) {
  const [showMenu, setShowMenu] = useState(false);
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);

  const handleNavClick = (path) => {
    onNavigate(path);
    setShowMenu(false);
  };

  return (
    <>
      {/* Top bar with glassy effect */}
      <div className="bg-gray-900/90 backdrop-blur-sm h-12 flex items-center justify-between px-4 relative z-40">
        <button 
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-2 group"
        >
          <i className="fas fa-dragon text-orange-500 text-xl group-hover:scale-110 transition-transform" />
          <span className="font-bold text-white group-hover:text-orange-300 transition-colors">Dancing Dragons</span>
        </button>
        
        <button
          onClick={() => setShowMenu(true)}
          className="text-white p-2 hover:text-orange-300 transition-colors"
        >
          <i className="fas fa-bars text-xl" />
        </button>
      </div>

      {/* Fullscreen menu with fun background elements */}
      {showMenu && (
        <div className="fixed inset-0 z-50 bg-gray-900">
          {/* Decorative background elements */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

          {/* Header */}
          <div className="h-12 flex items-center justify-between px-4 border-b border-gray-800">
            <span className="font-bold text-orange-300">Menu</span>
            <button
              onClick={() => setShowMenu(false)}
              className="text-white p-2 hover:text-orange-300 transition-colors"
            >
              <i className="fas fa-times text-xl" />
            </button>
          </div>

          {/* Menu Content */}
          <div className="p-4 h-[calc(100vh-48px)] flex flex-col">
            {/* Navigation Links */}
            <nav className="space-y-2">
              {[
                { path: '/', label: 'Home', icon: 'fa-house-heart' },
                { path: '/events', label: 'Festivals & Adventures', icon: 'fa-calendar-star' },
                { path: '/activities', label: 'Join The Action', icon: 'fa-sparkles' },
                { path: '/community', label: 'Our Community', icon: 'fa-users' }
              ].map(({ path, label, icon }) => (
                <button
                  key={path}
                  onClick={() => handleNavClick(path)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all duration-300
                             ${currentPath === path ? 
                               'bg-orange-500 text-white scale-102' : 
                               'text-gray-300 hover:bg-gray-800 hover:text-orange-300'}`}
                >
                  <i className={`fas ${icon} w-6`} />
                  <span className="text-lg">{label}</span>
                </button>
              ))}
            </nav>

            {/* Fun Stats/Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <i className="fas fa-music text-orange-500 text-2xl mb-2" />
                <div className="text-white">Festival Crews</div>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg text-center">
                <i className="fas fa-mountain text-orange-500 text-2xl mb-2" />
                <div className="text-white">Adventure Squad</div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-auto space-y-4">
              <button
                onClick={() => {
                  setIsSignalModalOpen(true);
                  setShowMenu(false);
                }}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white 
                         py-4 rounded-lg text-lg font-semibold
                         flex items-center justify-center gap-2
                         transition-all duration-300 hover:scale-102"
              >
                <i className="fas fa-sparkles" />
                Join The Fun
              </button>

              <div className="text-center text-sm text-gray-400">
                <i className="fas fa-heart text-orange-500 mr-2" />
                Good Vibes Only
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

Navigation.propTypes = {
  currentPath: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default Navigation;