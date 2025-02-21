// File: src/components/Navigation/EventsDropdown.js

import React, { useState } from 'react';
import { useClickOutside } from '../../hooks/useUtils';
import { CreateEventModal } from '../events/CreateEventModal';
import EventDetailsModal from '../events/EventDetails';
import { AREA_DEFINITIONS } from '../events/LocationSystem';

const DEMO_EVENTS = [
  {
    id: 'e1',
    title: 'Weekend Mountain Retreat',
    date: '2025-03-01',
    time: '09:00',
    duration: 480, // 8 hours
    type: 'adventure',
    capacity: 12,
    spotsLeft: 3,
    status: 'open',
    areaCode: 'north_cascades',
    description: 'A challenging day hike through beautiful alpine terrain. Experience required.',
    requirements: 'Hiking boots required\nWater (3L minimum)\nSnacks and lunch\nLayered clothing\nFirst aid kit',
    weatherAdvisory: 'Morning fog expected. Prepare for varying conditions.',
    isPrivate: true
  },
  {
    id: 'e2',
    title: 'Movement Workshop',
    date: '2025-02-28',
    time: '18:30',
    duration: 90,
    type: 'movement',
    capacity: 20,
    spotsLeft: 8,
    status: 'open',
    areaCode: 'downtown_area',
    description: 'Explore fluid movement patterns and dance expression in this guided workshop.',
    requirements: 'Comfortable clothing\nWater bottle\nYoga mat',
    isPrivate: true
  },
  {
    id: 'e3',
    title: 'Sunrise Meditation',
    date: '2025-02-27',
    time: '07:00',
    duration: 60,
    type: 'inner-work',
    capacity: 15,
    spotsLeft: 0,
    status: 'waitlist',
    areaCode: 'waterfront_park',
    description: 'Start your day with guided meditation by the water.',
    requirements: 'Meditation cushion or mat\nWarm layers\nWater bottle',
    isPrivate: true,
    waitlist: ['token1', 'token2'] // Anonymous waitlist tokens
  }
];

function EventCard({ event, onClick }) {
  const getEventIcon = (type) => {
    const icons = {
      'adventure': 'fa-mountain',
      'movement': 'fa-music',
      'inner-work': 'fa-om'
    };
    return icons[type] || 'fa-calendar';
  };

  const area = AREA_DEFINITIONS[event.areaCode];

  return (
    <div 
      className="p-4 hover:bg-gray-800/50 rounded-lg transition-colors cursor-pointer"
      onClick={() => onClick(event)}
    >
      <div className="flex items-start gap-4">
        <div className="bg-gray-800/80 p-3 rounded-lg text-orange-500">
          <i className={`fas ${getEventIcon(event.type)} text-xl`}></i>
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h4 className="font-semibold text-white">{event.title}</h4>
              <div className="text-sm text-gray-400 mt-1">
                {new Date(event.date).toLocaleDateString('en-US', { 
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric'
                })} at {event.time}
              </div>
              <div className="text-sm text-gray-500 mt-1">
                {area?.name}
              </div>
            </div>
            <div className={`text-sm font-medium ${
              event.status === 'waitlist' ? 'text-yellow-500' :
              event.spotsLeft <= 3 ? 'text-orange-500' : 'text-green-500'
            }`}>
              {event.status === 'waitlist' ? 'Waitlist' :
               event.spotsLeft === 0 ? 'Full' :
               `${event.spotsLeft} spots left`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function EventsDropdown({ onClose }) {
  const dropdownRef = React.useRef(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  useClickOutside(dropdownRef, onClose);

  return (
    <>
      <div 
        ref={dropdownRef}
        className="absolute top-full right-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-lg rounded-xl 
                   shadow-xl border border-gray-700 overflow-hidden transform origin-top-right 
                   transition-all duration-200"
      >
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-orange-300">Upcoming Events</h3>
            <button 
              onClick={() => {/* Navigate to events page */}}
              className="text-sm text-orange-500 hover:text-orange-400 transition-colors"
            >
              View All
            </button>
          </div>
        </div>

        <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="divide-y divide-gray-700">
            {DEMO_EVENTS.map(event => (
              <EventCard 
                key={event.id} 
                event={event}
                onClick={(event) => setSelectedEvent(event)}
              />
            ))}
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 bg-gray-800/50">
          <button 
            onClick={() => setShowCreateModal(true)}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 
                     rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <i className="fas fa-plus"></i>
            Create Event
          </button>
        </div>
      </div>

      {/* Modals */}
      <CreateEventModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateEvent={(eventData) => {
          console.log('New event:', eventData);
          setShowCreateModal(false);
        }}
      />

      {selectedEvent && (
        <EventDetailsModal
          isOpen={true}
          onClose={() => setSelectedEvent(null)}
          event={selectedEvent}
        />
      )}
    </>
  );
}

export default EventsDropdown;