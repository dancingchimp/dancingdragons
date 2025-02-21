// File: src/components/Navigation/Navigation.js

import React, { useState } from 'react';
import EventsDropdown from './EventsDropdown';
import MessagesDropdown from './MessagesDropdown';

function SystemButtons() {
  const [showEvents, setShowEvents] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  
  const unreadEvents = 2; // Example count
  const unreadMessages = 3; // Example count

  return (
    <div className="flex items-center gap-2">
      {/* Events Button */}
      <div className="relative">
        <button
          onClick={() => {
            setShowEvents(!showEvents);
            setShowMessages(false);
          }}
          className="p-2 text-white hover:text-orange-500 transition-colors relative"
          aria-label="Events"
        >
          <i className="fas fa-calendar text-xl"></i>
          {unreadEvents > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs 
                           w-4 h-4 flex items-center justify-center rounded-full">
              {unreadEvents}
            </span>
          )}
        </button>
        {showEvents && <EventsDropdown onClose={() => setShowEvents(false)} />}
      </div>

      {/* Messages Button */}
      <div className="relative">
        <button
          onClick={() => {
            setShowMessages(!showMessages);
            setShowEvents(false);
          }}
          className="p-2 text-white hover:text-orange-500 transition-colors relative"
          aria-label="Messages"
        >
          <i className="fas fa-bell text-xl"></i>
          {unreadMessages > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs 
                           w-4 h-4 flex items-center justify-center rounded-full">
              {unreadMessages}
            </span>
          )}
        </button>
        {showMessages && <MessagesDropdown onClose={() => setShowMessages(false)} />}
      </div>
    </div>
  );
}

function Navigation({ isMenuOpen, toggleMenu, closeMenu, currentPath, onNavigate }) {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/95 backdrop-blur shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('/')} 
            className="flex items-center"
          >
            <i className="fas fa-dragon text-orange-500 text-2xl mr-2"></i>
            <span className="text-white text-xl font-bold">Dancing Dragons</span>
          </button>

          {/* Desktop Navigation */}
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
            
            {/* System Buttons */}
            <SystemButtons />

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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <SystemButtons />
            <button
              className="p-2 text-white hover:text-orange-500 transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
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