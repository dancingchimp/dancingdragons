// src/components/events/RSVPModal.js

import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../system/Modal';

/**
 * TODO: Phase 2 - RSVP System Implementation
 * 
 * Core Features:
 * - Anonymous participation tokens
 * - Waitlist management
 * - Capacity tracking
 * - Signal group integration
 * - Requirements confirmation
 * 
 * Privacy Features:
 * - Zero personal data storage
 * - Temporary access tokens
 * - Encrypted participant lists
 * - Auto-deletion after events
 * 
 * Future Enhancements:
 * - Equipment verification
 * - Experience level validation
 * - Emergency contact system (encrypted)
 * - Weather advisory acknowledgment
 * - Cancellation management
 * - Buddy system matching
 */

export function RSVPModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Event RSVP"
      size="md"
    >
      <div className="space-y-6">
        <div className="bg-gray-800/50 rounded-xl p-6">
          <i className="fas fa-calendar-check text-orange-500 text-3xl mb-4 block"></i>
          <h3 className="text-xl font-semibold text-orange-300 mb-2">
            RSVP System Coming Soon
          </h3>
          <p className="text-gray-300">
            Our privacy-focused RSVP system is under development. For now, please join
            our Signal group to participate in events.
          </p>
        </div>
      </div>
    </Modal>
  );
}

RSVPModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default RSVPModal;