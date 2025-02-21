import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ isMenuOpen, toggleMenu, closeMenu }) {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <i className="fas fa-dragon text-orange-500 text-2xl mr-2"></i>
            <span className="text-white text-xl font-bold">Dancing Dragons</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/activities" className="text-white hover:text-orange-500">
              Activities
            </Link>
            <Link to="/community" className="text-white hover:text-orange-500">
              Community
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;