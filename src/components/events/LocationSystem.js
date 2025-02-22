// src/components/events/LocationSystem.js
import React from 'react';
import PropTypes from 'prop-types';

/**
 * TODO: Phase 2 - Privacy-First Location System
 * 
 * System Features:
 * - Secure location sharing via Signal
 * - Meeting point coordination
 * - Area-based privacy (show general area only)
 * - Weather integration
 * - Terrain difficulty indicators
 * - Emergency gathering points
 * - Permit requirement checks
 * 
 * Privacy Features:
 * - No GPS tracking
 * - No location storage
 * - Temporary access tokens
 * - End-to-end encrypted sharing
 */

// Area definitions for different locations
export const AREA_DEFINITIONS = {
  north_cascades: {
    name: 'North Cascades',
    region: 'Mountains',
    difficultyLevel: 'Advanced',
    approxDistance: '2-3 hours from city',
    terrain: 'Alpine, Technical Trails',
    elevation: '5000-8000 ft',
    permitRequired: true
  },
  olympic_peninsula: {
    name: 'Olympic Peninsula',
    region: 'Coastal Mountains',
    difficultyLevel: 'Moderate',
    approxDistance: '2-4 hours from city',
    terrain: 'Rainforest, Coastal',
    elevation: '0-7000 ft',
    permitRequired: true
  },
  // Add more areas as needed
};

export function LocationDetailsCard({ event, isParticipant }) {
  const area = AREA_DEFINITIONS[event?.areaCode];
  
  if (!area) return null;

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 space-y-4">
      <h3 className="text-lg font-semibold text-orange-300">
        Coming Soon: Location Details
      </h3>
      <p className="text-gray-300">
        Location sharing will be implemented in the next phase, ensuring privacy and security for all participants.
      </p>
    </div>
  );
}

LocationDetailsCard.propTypes = {
  event: PropTypes.shape({
    areaCode: PropTypes.string
  }),
  isParticipant: PropTypes.bool
};

export default LocationDetailsCard;