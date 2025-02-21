// File: src/context/EventContext.js

import React, { createContext, useContext, useState, useEffect } from 'react';
import { generateTemporaryToken, cleanupExpiredTokens } from '../utils/crypto';

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [userEvents, setUserEvents] = useState(new Set()); // Stores event tokens

  // Load user's event tokens on mount
  useEffect(() => {
    const loadUserEvents = () => {
      const tokens = new Set();
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('event_')) {
          try {
            const { token, expiration } = JSON.parse(localStorage.getItem(key));
            if (new Date(expiration) > new Date()) {
              tokens.add(key.replace('event_', ''));
            }
          } catch (e) {
            // Invalid data, will be cleaned up
          }
        }
      }
      setUserEvents(tokens);
    };

    loadUserEvents();
    cleanupExpiredTokens();
  }, []);

  const createEvent = (eventData) => {
    const newEvent = {
      ...eventData,
      id: generateTemporaryToken(),
      createdAt: new Date().toISOString(),
      participants: [],
      waitlist: []
    };

    setEvents(prev => [...prev, newEvent]);
    return newEvent;
  };

  const joinEvent = (eventId) => {
    const event = events.find(e => e.id === eventId);
    if (!event) return null;

    const token = generateTemporaryToken();
    const expiration = new Date();
    expiration.setDate(expiration.getDate() + 1);

    localStorage.setItem(`event_${eventId}`, JSON.stringify({
      token,
      expiration: expiration.toISOString()
    }));

    setUserEvents(prev => new Set([...prev, eventId]));
    
    return {
      token,
      expiration: expiration.toISOString()
    };
  };

  const leaveEvent = (eventId) => {
    localStorage.removeItem(`event_${eventId}`);
    setUserEvents(prev => {
      const newSet = new Set(prev);
      newSet.delete(eventId);
      return newSet;
    });
  };

  const isParticipant = (eventId) => {
    return userEvents.has(eventId);
  };

  const value = {
    events,
    createEvent,
    joinEvent,
    leaveEvent,
    isParticipant
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
}