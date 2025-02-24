// File: src/components/Navigation/Navigation.js
// Location: src/components/Navigation/Navigation.js

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navigation({ isScrolled }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // External links
  const LINKS = {
    SIGNAL: "https://signal.me/#eu/--flkIBHugKFa1TKXL56Kmeaedgfnriw96sBgiKuTB1izx9pLetA-K8vts4rIN90",
    GITBOOK: "https://dancingchimp.gitbook.io/dancingdragons"
  };

  // Navigation links
  const NAV_LINKS = [
    {
      name: "About",
      href: LINKS.GITBOOK,
      external: true
    },
    {
      name: "Activities",
      path: "/activities",
      external: false
    },
    {
      name: "Community",
      path: "/community",
      external: false
    },
    {
      name: "Events",
      path: "/events",
      external: false
    }
  ];

  const isActive = (path) => {
    if (!path) return false;
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 text-orange-500 hover:text-orange-400 transition-colors"
        >
          <i className="fas fa-dragon text-3xl" />
          <span className={`font-bold text-lg transition-all duration-300 ${
            isScrolled ? 'text-white' : 'text-orange-300'
          }`}>
            Dancing Dragons
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, index) => (
            <div key={index}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-300 transition-colors flex items-center gap-1"
                >
                  {link.name}
                  <i className="fas fa-external-link-alt text-xs" />
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`transition-colors relative ${
                    isActive(link.path)
                      ? 'text-orange-400'
                      : 'text-gray-300 hover:text-orange-300'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </Link>
              )}
            </div>
          ))}
          
          <Link
            to="/join"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg 
                     transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Join Us
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-orange-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-gray-900/95 backdrop-blur-lg transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-8 gap-8">
          {NAV_LINKS.map((link, index) => (
            <div key={index} className="border-b border-gray-800 pb-3">
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-300 transition-colors text-xl flex items-center gap-2"
                >
                  {link.name}
                  <i className="fas fa-external-link-alt text-sm" />
                </a>
              ) : (
                <Link
                  to={link.path}
                  className={`text-xl transition-colors ${
                    isActive(link.path)
                      ? 'text-orange-400'
                      : 'text-gray-300 hover:text-orange-300'
                  }`}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          
          <Link
            to="/join"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg 
                     transition-all duration-300 text-center text-lg mt-4"
          >
            Join Our Community
          </Link>
        </div>
      </div>
    </header>
  );
}

Navigation.propTypes = {
  isScrolled: PropTypes.bool
};

Navigation.defaultProps = {
  isScrolled: false
};

export default Navigation;