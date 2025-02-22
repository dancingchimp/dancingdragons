// src/components/events/EventDetails.js
import React, { useState } from 'react';
import { Modal } from '../system/Modal';
import { Card, CardContent } from '../ui/Card';
import { LocationDetailsCard } from './LocationSystem';
import { validateTemporaryToken } from '../../utils/crypto';

function ParticipantCount({ current, max, waitlist = 0 }) {
  const percentFull = (current / max) * 100;
  
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-400">Participants</span>
        <span className="text-white">{current} / {max}</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full rounded-full transition-all duration-500 ${
            percentFull >= 90 ? 'bg-orange-500' :
            percentFull >= 70 ? 'bg-orange-400' : 'bg-orange-300'
          }`}
          style={{ width: `${percentFull}%` }}
        />
      </div>
      {waitlist > 0 && (
        <div className="text-sm text-orange-400">
          {waitlist} on waitlist
        </div>
      )}
    </div>
  );
}

function EventTiming({ event }) {
  const eventDate = new Date(event.date);
  const today = new Date();
  const daysUntil = Math.ceil((eventDate - today) / (1000 * 60 * 60 * 24));
  
  return (
    <div className="space-y-4">
      <Card>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="bg-gray-800 p-3 rounded text-orange-500">
              <i className="fas fa-clock text-xl"></i>
            </div>
            <div>
              <div className="text-white">
                {eventDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="text-gray-400">
                {event.time} ({event.duration} minutes)
              </div>
            </div>
          </div>
          {daysUntil > 0 && (
            <div className="mt-3 text-sm text-orange-300">
              {daysUntil} days until event
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

function RequirementsList({ requirements }) {
  const reqList = requirements.split('\n').filter(Boolean);
  
  return (
    <div className="space-y-2">
      {reqList.map((req, index) => (
        <div key={index} className="flex items-start gap-3 text-gray-300">
          <i className="fas fa-check-circle text-orange-500 mt-1"></i>
          <span>{req}</span>
        </div>
      ))}
    </div>
  );
}

function EventDetailsModal({ isOpen, onClose, event }) {
  const [isParticipant, setIsParticipant] = useState(() => {
    return validateTemporaryToken(localStorage.getItem(`event_${event.id}_token`), event.id);
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={event.title}
      size="lg"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          <EventTiming event={event} />
          
          <ParticipantCount 
            current={event.capacity - event.spotsLeft}
            max={event.capacity}
            waitlist={event.waitlist?.length || 0}
          />

          <Card>
            <CardContent className="space-y-4">
              <h3 className="text-lg font-semibold text-orange-300">
                Event Details
              </h3>
              <p className="text-gray-300">
                {event.description}
              </p>
              
              {event.requirements && (
                <div className="mt-6">
                  <h4 className="font-medium text-white mb-3">Requirements</h4>
                  <RequirementsList requirements={event.requirements} />
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <LocationDetailsCard 
            event={event}
            isParticipant={isParticipant}
          />

          {/* Action Buttons */}
          <div className="flex gap-4">
            {isParticipant ? (
              <>
                <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white 
                                 px-6 py-3 rounded-xl transition-colors">
                  View Signal Group
                </button>
                <button className="px-6 py-3 border border-orange-500 text-orange-500 
                                 rounded-xl hover:bg-orange-500/10 transition-colors">
                  Cancel RSVP
                </button>
              </>
            ) : (
              <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white 
                               px-6 py-3 rounded-xl transition-colors">
                {event.spotsLeft > 0 ? 'RSVP Now' : 'Join Waitlist'}
              </button>
            )}
          </div>

          {/* Privacy Notice */}
          <div className="text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <i className="fas fa-shield-alt"></i>
              Privacy protected:
            </p>
            <ul className="mt-2 space-y-1 pl-6 list-disc">
              <li>Location details shared via Signal</li>
              <li>Anonymous participation</li>
              <li>No personal data stored</li>
              <li>Auto-delete after event</li>
            </ul>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default EventDetailsModal;