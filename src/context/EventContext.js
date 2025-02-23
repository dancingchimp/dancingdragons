// src/context/EventContext.js

import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * TODO: Phase 2 - Event State Management
 * 
 * State Management:
 * - Event listings
 * - RSVP tracking
 * - Capacity management
 * - Waitlist handling
 * - Location privacy
 * 
 * Privacy Features:
 * - No persistent storage
 * - Anonymous participation
 * - Temporary tokens
 * - Encrypted state
 * 
 * Future Enhancements:
 * - Real-time updates
 * - Weather integration
 * - Emergency alerts
 * - Buddy system matching
 * - Equipment sharing
 */

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  // More state management coming in Phase 2

  const value = {
    events,
    setEvents,
    // Future methods will be added here
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
}

EventProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export function useEventContext() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEventContext must be used within an EventProvider');
  }
  return context;
}