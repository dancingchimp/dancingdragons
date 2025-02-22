// src/components/events/eventHelpers.js

import { EVENT_STATUS } from './eventTypes';

// Generate a temporary event token
export const generateEventToken = () => {
  const array = new Uint8Array(24);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode.apply(null, array))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

// Verify event token
export const verifyEventToken = (token, eventId) => {
  const stored = localStorage.getItem(`event_${eventId}`);
  if (!stored) return false;
  
  try {
    const { token: storedToken, expiration } = JSON.parse(stored);
    if (new Date(expiration) < new Date()) {
      localStorage.removeItem(`event_${eventId}`);
      return false;
    }
    return token === storedToken;
  } catch (e) {
    return false;
  }
};

// Store event token with expiration
export const storeEventToken = (eventId, token) => {
  const expiration = new Date();
  expiration.setDate(expiration.getDate() + 1); // 24-hour expiration
  
  localStorage.setItem(`event_${eventId}`, JSON.stringify({
    token,
    expiration: expiration.toISOString()
  }));
};

// Handle RSVP response
export const handleRSVPResponse = (response) => {
  const { status, token, eventId } = response;
  
  if (status === EVENT_STATUS.OPEN) {
    storeEventToken(eventId, token);
    return {
      success: true,
      message: 'RSVP confirmed! Check Signal for event details.',
      type: 'success'
    };
  } else if (status === EVENT_STATUS.WAITLIST) {
    return {
      success: true,
      message: 'Added to waitlist. We\'ll notify you if a spot opens up.',
      type: 'info'
    };
  }
  
  return {
    success: false,
    message: 'Unable to process RSVP. Please try again.',
    type: 'error'
  };
};

// Clean up expired tokens
export const cleanupExpiredTokens = () => {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('event_')) {
      try {
        const { expiration } = JSON.parse(localStorage.getItem(key));
        if (new Date(expiration) < new Date()) {
          localStorage.removeItem(key);
        }
      } catch (e) {
        localStorage.removeItem(key);
      }
    }
  }
};

// Run cleanup periodically
setInterval(cleanupExpiredTokens, 1000 * 60 * 60); // Every hour

// Format event duration
export const formatDuration = (minutes) => {
  if (minutes < 60) return `${minutes} minutes`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes 
    ? `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} minutes`
    : `${hours} hour${hours > 1 ? 's' : ''}`;
};

// Check if event needs weather advisory
export const needsWeatherAdvisory = (event) => {
  return ['adventure', 'movement'].includes(event.type) && 
         event.location.terrain !== 'Urban';