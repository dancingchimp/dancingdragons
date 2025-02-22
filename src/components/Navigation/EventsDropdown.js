// src/components/Navigation/EventsDropdown.js

import React from 'react';
import PropTypes from 'prop-types';

/**
 * TODO: Phase 2 - Events System
 * 
 * Features to implement:
 * - Quick event preview
 * - RSVP functionality
 * - Waitlist management
 * - Event categories:
 *   - Adventure
 *   - Movement
 *   - Inner Work
 * 
 * Privacy features:
 * - Anonymous participation
 * - Secure location sharing
 * - Private RSVPs
 * - Temporary access tokens
 * 
 * Additional features:
 * - Weather integration
 * - Capacity management
 * - Equipment requirements
 * - Experience level indicators
 */

function EventsDropdown({ onClose }) {
  return (
    <div className="absolute top-full right-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-lg rounded-xl 
                   shadow-xl border border-gray-700">
      <div className="p-4 text-center">
        <i className="fas fa-calendar text-orange-500 text-2xl mb-4"></i>
        <h3 className="text-lg font-semibold text-orange-300">
          Events Coming Soon
        </h3>
        <p className="text-sm text-gray-400 mt-2">
          Our privacy-focused event system will be available soon. Join our Signal group for current events.
        </p>
      </div>
    </div>
  );
}

EventsDropdown.propTypes = {
  onClose: PropTypes.func.isRequired
};

export default EventsDropdown;