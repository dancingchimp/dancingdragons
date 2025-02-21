// File: src/components/events/CreateEventModal.js

import React, { useState } from 'react';
import { Modal } from '../system/Modal';
import { generateTemporaryToken } from '../../utils/crypto';

const EVENT_TYPES = [
  { id: 'adventure', name: 'Adventure', icon: 'fa-mountain' },
  { id: 'movement', name: 'Movement', icon: 'fa-music' },
  { id: 'inner-work', name: 'Inner Work', icon: 'fa-om' }
];

function EventTypeSelector({ selected, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {EVENT_TYPES.map(type => (
        <button
          key={type.id}
          onClick={() => onSelect(type.id)}
          className={`p-4 rounded-xl border transition-all duration-300 text-center
            ${selected === type.id 
              ? 'bg-orange-500/10 border-orange-500/50 text-orange-300' 
              : 'bg-gray-800/30 border-gray-700 text-gray-300 hover:bg-gray-800/50'}`}
        >
          <i className={`fas ${type.icon} text-2xl mb-2`}></i>
          <div className="font-medium">{type.name}</div>
        </button>
      ))}
    </div>
  );
}

function CreateEventForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    type: '',
    title: '',
    date: '',
    time: '',
    duration: 60,
    capacity: 12,
    description: '',
    location: 'TBA', // Default to TBA for privacy
    requirements: '',
    isPrivate: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate a temporary event token
    const eventToken = generateTemporaryToken();
    
    onSubmit({
      ...formData,
      id: eventToken,
      status: 'open',
      spotsLeft: formData.capacity,
      participants: [],
      waitlist: []
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <label className="block">
          <span className="text-gray-300 mb-1 block">Event Type</span>
          <EventTypeSelector
            selected={formData.type}
            onSelect={(type) => setFormData({ ...formData, type })}
          />
        </label>

        <label className="block">
          <span className="text-gray-300 mb-1 block">Title</span>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 
                     border border-gray-700 focus:outline-none focus:border-orange-500"
            placeholder="Event title"
          />
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-300 mb-1 block">Date</span>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white 
                       border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-300 mb-1 block">Time</span>
            <input
              type="time"
              required
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white 
                       border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-300 mb-1 block">Duration (minutes)</span>
            <input
              type="number"
              required
              min="15"
              step="15"
              value={formData.duration}
              onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white 
                       border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </label>

          <label className="block">
            <span className="text-gray-300 mb-1 block">Capacity</span>
            <input
              type="number"
              required
              min="1"
              value={formData.capacity}
              onChange={(e) => setFormData({ ...formData, capacity: parseInt(e.target.value) })}
              className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white 
                       border border-gray-700 focus:outline-none focus:border-orange-500"
            />
          </label>
        </div>

        <label className="block">
          <span className="text-gray-300 mb-1 block">Description</span>
          <textarea
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 
                     border border-gray-700 focus:outline-none focus:border-orange-500"
            rows="4"
            placeholder="Event description and details"
          />
        </label>

        <label className="block">
          <span className="text-gray-300 mb-1 block">Requirements</span>
          <textarea
            value={formData.requirements}
            onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
            className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 
                     border border-gray-700 focus:outline-none focus:border-orange-500"
            rows="2"
            placeholder="Required items or prerequisites"
          />
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={formData.isPrivate}
            onChange={(e) => setFormData({ ...formData, isPrivate: e.target.checked })}
            className="rounded border-gray-700 bg-gray-800 text-orange-500 
                     focus:ring-orange-500 focus:ring-offset-gray-900"
          />
          <span className="text-gray-300">Private event (Signal group only)</span>
        </label>
      </div>

      <div className="flex gap-4 justify-end">
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg 
                   transition-colors flex items-center gap-2"
        >
          <i className="fas fa-plus"></i>
          Create Event
        </button>
      </div>

      <div className="text-sm text-gray-400">
        <i className="fas fa-shield-alt mr-2"></i>
        Event details are only shared with confirmed participants
      </div>
    </form>
  );
}

export function CreateEventModal({ isOpen, onClose, onCreateEvent }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create New Event"
      size="lg"
    >
      <CreateEventForm onSubmit={(eventData) => {
        onCreateEvent(eventData);
        onClose();
      }} />
    </Modal>
  );
}