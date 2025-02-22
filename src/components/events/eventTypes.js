// src/components/events/eventTypes.js

// Event type definitions
export const EVENT_TYPES = {
    ADVENTURE: 'adventure',
    MOVEMENT: 'movement',
    INNER_WORK: 'inner-work'
  };
  
  // Event status definitions
  export const EVENT_STATUS = {
    OPEN: 'open',
    FULL: 'full',
    WAITLIST: 'waitlist',
    CANCELLED: 'cancelled'
  };
  
  // Event difficulty levels
  export const DIFFICULTY_LEVELS = {
    BEGINNER: 'beginner',
    INTERMEDIATE: 'intermediate',
    ADVANCED: 'advanced',
    EXPERT: 'expert'
  };
  
  // Event helper functions
  export const eventHelpers = {
    getEventIcon: (type) => {
      const icons = {
        [EVENT_TYPES.ADVENTURE]: 'fa-mountain',
        [EVENT_TYPES.MOVEMENT]: 'fa-music',
        [EVENT_TYPES.INNER_WORK]: 'fa-om'
      };
      return icons[type] || 'fa-calendar';
    },
  
    getStatusColor: (status, spotsLeft) => {
      if (status === EVENT_STATUS.CANCELLED) return 'text-red-500';
      if (status === EVENT_STATUS.WAITLIST) return 'text-yellow-500';
      if (spotsLeft <= 3) return 'text-orange-500';
      return 'text-green-500';
    },
  
    formatEventDate: (date) => {
      return new Date(date).toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      });
    },
  
    getTimeUntilEvent: (date) => {
      const eventDate = new Date(date);
      const now = new Date();
      const diffTime = Math.abs(eventDate - now);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    },
  
    canJoinEvent: (event) => {
      return event.status === EVENT_STATUS.OPEN && event.spotsLeft > 0;
    }
  };