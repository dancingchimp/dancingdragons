// File: src/components/Navigation/MessagesDropdown.js

import React from 'react';
import { useClickOutside } from '../../hooks/useUtils';

const DEMO_MESSAGES = [
  {
    id: 'm1',
    type: 'event_update',
    title: 'Mountain Retreat Update',
    message: 'New meeting point: North Ridge Parking',
    time: '2h ago',
    unread: true
  },
  {
    id: 'm2',
    type: 'community',
    title: 'New Movement Session',
    message: 'Added: Sunset Flow this Friday',
    time: '5h ago',
    unread: true
  },
  {
    id: 'm3',
    type: 'system',
    title: 'Signal Group Link Updated',
    message: 'Adventure group has a new link',
    time: '1d ago',
    unread: true
  }
];

function MessageCard({ message }) {
  const getMessageIcon = (type) => {
    const icons = {
      'event_update': 'fa-calendar-alt',
      'community': 'fa-users',
      'system': 'fa-bell'
    };
    return icons[type] || 'fa-envelope';
  };

  return (
    <div className={`p-4 hover:bg-gray-800/50 rounded-lg transition-colors
                    ${message.unread ? 'bg-gray-800/30' : ''}`}>
      <div className="flex items-start gap-4">
        <div className="bg-gray-800/80 p-3 rounded-lg text-orange-500">
          <i className={`fas ${getMessageIcon(message.type)} text-xl`}></i>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="font-semibold text-white flex items-center gap-2">
                {message.title}
                {message.unread && (
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                )}
              </h4>
              <p className="text-sm text-gray-400 mt-1">{message.message}</p>
            </div>
            <div className="text-xs text-gray-500">{message.time}</div>
          </div>
          
          <div className="mt-3 flex gap-2">
            <button className="text-sm text-orange-500 hover:text-orange-400 transition-colors">
              View Details
            </button>
            {message.unread && (
              <button className="text-sm text-gray-400 hover:text-gray-300 transition-colors">
                Mark as Read
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function MessagesDropdown({ onClose }) {
  const dropdownRef = React.useRef(null);
  useClickOutside(dropdownRef, onClose);

  return (
    <div 
      ref={dropdownRef}
      className="absolute top-full right-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-lg rounded-xl 
                 shadow-xl border border-gray-700 overflow-hidden transform origin-top-right 
                 transition-all duration-200"
    >
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-orange-300">Notifications</h3>
          <button 
            onClick={() => {/* Mark all as read */}}
            className="text-sm text-orange-500 hover:text-orange-400 transition-colors"
          >
            Mark All Read
          </button>
        </div>
      </div>

      <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
        <div className="divide-y divide-gray-700">
          {DEMO_MESSAGES.map(message => (
            <MessageCard key={message.id} message={message} />
          ))}
        </div>
      </div>

      <div className="p-4 border-t border-gray-700 bg-gray-800/50">
        <div className="text-center text-sm text-gray-400">
          Messages are end-to-end encrypted and auto-delete after 7 days
        </div>
      </div>
    </div>
  );
}

export default MessagesDropdown;