// src/components/events/CreateEventModal.js
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from '../system/Modal';
import { Card, CardContent } from '../ui/Card';

/**
 * TODO: Phase 2 - Event Creation Implementation
 * 
 * Features to implement:
 * - Event type selection (adventure, movement, inner work)
 * - Date and time picker
 * - Location selection with privacy controls
 * - Capacity setting
 * - Requirements checklist
 * - Weather advisory integration
 * - Signal group creation
 * 
 * Privacy considerations:
 * - No personal data storage
 * - Secure location sharing
 * - Temporary tokens for attendance
 */

export function CreateEventModal({ isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Event"
      size="lg"
    >
      <Card>
        <CardContent className="space-y-6">
          <div className="text-center">
            <i className="fas fa-tools text-4xl text-orange-500 mb-4"></i>
            <h3 className="text-xl font-semibold text-orange-300 mb-4">
              Coming Soon
            </h3>
            <p className="text-gray-300">
              Event creation will be available soon. For now, please connect via Signal to join existing events.
            </p>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <i className="fas fa-info-circle text-orange-500"></i>
              Features coming soon:
            </p>
            <ul className="mt-2 space-y-1 pl-6 list-disc">
              <li>Create private events</li>
              <li>Set location & capacity</li>
              <li>Manage RSVPs</li>
              <li>Send secure notifications</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </Modal>
  );
}

CreateEventModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default CreateEventModal;