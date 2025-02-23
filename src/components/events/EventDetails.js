// src/components/events/EventDetails.js

import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../system/Modal';

/**
 * TODO: Phase 2 - Event Details System
 * 
 * Core Features:
 * - Private event information display
 * - Dynamic capacity tracking
 * - Equipment requirements
 * - Skill level indicators
 * - Weather integration
 * - Location privacy system
 * 
 * Privacy Features:
 * - Participant anonymity
 * - Secure location sharing
 * - Time-limited access
 * - Signal group integration
 * 
 * Future Enhancements:
 * - Buddy system matching
 * - Equipment sharing coordination
 * - Carpool arrangement (privacy-focused)
 * - Emergency protocols
 * - Guide credentials verification
 * - Area permit checking
 */

export function EventDetailsModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Event Details"
      size="lg"
    >
      <div className="text-center p-6">
        <i className="fas fa-calendar-alt text-orange-500 text-4xl mb-4"></i>
        <h3 className="text-xl font-semibold text-orange-300 mb-4">
          Event Details Coming Soon
        </h3>
        <p className="text-gray-300">
          Our privacy-focused event system is under development. 
          Join our Signal group for current event information.
        </p>
      </div>
    </Modal>
  );
}

EventDetailsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default EventDetailsModal;