// src/components/events/RSVPModal.js
import React, { useState } from 'react';
import { Modal } from '../system/Modal';
import { Card, CardContent } from '../ui/Card';
import { generateTemporaryToken } from '../../utils/crypto';

function RSVPForm({ event, onSubmit }) {
  const [formData, setFormData] = useState({
    token: generateTemporaryToken(), // Generate anonymous participant token
    requirements: false,
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="space-y-6">
      {/* Event Summary */}
      <Card>
        <CardContent>
          <div className="flex items-start gap-4">
            <div className="bg-gray-800 p-3 rounded-lg text-orange-500">
              <i className={`fas ${
                event.type === 'adventure' ? 'fa-mountain' :
                event.type === 'movement' ? 'fa-music' : 'fa-om'
              } text-xl`}></i>
            </div>
            <div>
              <h3 className="font-semibold text-white">{event.title}</h3>
              <p className="text-sm text-gray-400">
                {new Date(event.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })} at {event.time}
              </p>
              {event.spotsLeft > 0 ? (
                <p className="text-sm text-green-500 mt-1">
                  {event.spotsLeft} spots remaining
                </p>
              ) : (
                <p className="text-sm text-yellow-500 mt-1">
                  Waitlist available
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Requirements Confirmation */}
        {event.requirements && (
          <div className="space-y-2">
            <h4 className="font-medium text-white">Requirements</h4>
            <p className="text-sm text-gray-400">{event.requirements}</p>
            <label className="flex items-start gap-2 mt-2">
              <input
                type="checkbox"
                required
                checked={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.checked })}
                className="mt-1 rounded border-gray-700 bg-gray-800 text-orange-500 
                         focus:ring-orange-500 focus:ring-offset-gray-900"
              />
              <span className="text-sm text-gray-300">
                I confirm that I meet all the requirements for this event
              </span>
            </label>
          </div>
        )}

        {/* Notes */}
        <div className="space-y-2">
          <label className="block">
            <span className="text-gray-300 text-sm">Notes (optional)</span>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="mt-1 w-full px-4 py-2 bg-gray-800 rounded-lg text-white 
                       placeholder-gray-400 border border-gray-700 
                       focus:outline-none focus:border-orange-500"
              rows="3"
              placeholder="Any additional information you'd like to share"
            />
          </label>
        </div>

        {/* Privacy Notice */}
        <div className="text-sm text-gray-400">
          <p className="flex items-center gap-2">
            <i className="fas fa-shield-alt"></i>
            Your privacy is protected:
          </p>
          <ul className="mt-2 space-y-1 pl-6 list-disc">
            <li>No personal information is stored</li>
            <li>Anonymous participation token provided</li>
            <li>Event details shared via Signal</li>
            <li>Automatic data deletion after event</li>
          </ul>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-4 justify-end pt-4">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg 
                     transition-colors flex items-center gap-2"
          >
            <i className="fas fa-check"></i>
            {event.spotsLeft > 0 ? 'Confirm RSVP' : 'Join Waitlist'}
          </button>
        </div>
      </form>
    </div>
  );
}

export function RSVPModal({ isOpen, onClose, event, onRSVP }) {
  const handleSubmit = (formData) => {
    onRSVP({
      eventId: event.id,
      ...formData,
      timestamp: new Date().toISOString(),
      status: event.spotsLeft > 0 ? 'confirmed' : 'waitlist'
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={event.spotsLeft > 0 ? 'RSVP to Event' : 'Join Event Waitlist'}
      size="md"
    >
      <RSVPForm event={event} onSubmit={handleSubmit} />
    </Modal>
  );
}

export default RSVPModal;