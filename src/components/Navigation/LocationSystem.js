// File: src/components/events/LocationSystem.js

import React from 'react';

// Define general areas without specific locations
const AREA_DEFINITIONS = {
  // Mountain Areas
  'north_cascades': {
    name: 'North Cascades',
    region: 'Mountains',
    difficultyLevel: 'Advanced',
    approxDistance: '2-3 hours from city',
    terrain: 'Alpine, Technical Trails',
    elevation: '5000-8000 ft',
    permitRequired: true
  },
  'olympic_peninsula': {
    name: 'Olympic Peninsula',
    region: 'Coastal Mountains',
    difficultyLevel: 'Moderate',
    approxDistance: '2-4 hours from city',
    terrain: 'Rainforest, Coastal',
    elevation: '0-7000 ft',
    permitRequired: true
  },
  
  // Urban Areas
  'downtown_area': {
    name: 'Downtown Area',
    region: 'Urban',
    difficultyLevel: 'Easy',
    approxDistance: 'Central',
    terrain: 'Urban',
    elevation: '0-100 ft',
    permitRequired: false
  },
  
  // Nature Areas
  'waterfront_park': {
    name: 'Waterfront Parks',
    region: 'Urban Nature',
    difficultyLevel: 'Easy',
    approxDistance: '15-30 mins from city',
    terrain: 'Coastal, Parks',
    elevation: '0-200 ft',
    permitRequired: false
  }
};

function LocationInfo({ areaCode, revealedDetails = false }) {
  const area = AREA_DEFINITIONS[areaCode];
  if (!area) return null;

  return (
    <div className="space-y-4">
      <div className="bg-gray-800/50 rounded-lg p-4">
        <h3 className="text-lg font-semibold text-orange-300 mb-2">
          {area.name}
        </h3>
        
        {/* Public Information */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400">Region:</span>
            <span className="ml-2 text-white">{area.region}</span>
          </div>
          <div>
            <span className="text-gray-400">Difficulty:</span>
            <span className="ml-2 text-white">{area.difficultyLevel}</span>
          </div>
          <div>
            <span className="text-gray-400">Distance:</span>
            <span className="ml-2 text-white">{area.approxDistance}</span>
          </div>
          <div>
            <span className="text-gray-400">Terrain:</span>
            <span className="ml-2 text-white">{area.terrain}</span>
          </div>
        </div>

        {/* Additional Info for Public Display */}
        <div className="mt-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <i className="fas fa-info-circle text-orange-500"></i>
            {area.permitRequired ? 
              'Permit/Pass required for this area' :
              'No special permits required'
            }
          </div>
        </div>

        {/* Revealed Details for Confirmed Participants */}
        {revealedDetails && (
          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="text-sm text-gray-400 mb-2">
              <i className="fas fa-lock text-orange-500 mr-2"></i>
              Meeting Point Details:
            </div>
            <div className="bg-gray-800 p-3 rounded text-white text-sm">
              Exact meeting point and directions will be shared via Signal
              24 hours before the event.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MeetingPointSelector({ onSelect }) {
  // This is only shown to event creators
  const meetingPoints = {
    'north_trailhead': 'North Trailhead Parking',
    'south_entrance': 'South Entrance Lot',
    'visitor_center': 'Visitor Center',
    'ranger_station': 'Ranger Station'
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm text-gray-300">
        Select Meeting Point
      </label>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="w-full px-4 py-2 bg-gray-800 rounded-lg text-white 
                 border border-gray-700 focus:outline-none focus:border-orange-500"
      >
        <option value="">Choose a meeting point...</option>
        {Object.entries(meetingPoints).map(([value, label]) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
      <p className="text-sm text-gray-400">
        <i className="fas fa-shield-alt mr-2"></i>
        Meeting point details are only shared with confirmed participants
      </p>
    </div>
  );
}

// Location Details Card for Event Display
function LocationDetailsCard({ event, isParticipant }) {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-orange-300">
          Location Details
        </h3>
        {isParticipant ? (
          <span className="text-green-500 text-sm flex items-center gap-2">
            <i className="fas fa-check-circle"></i>
            Details Available
          </span>
        ) : (
          <span className="text-gray-400 text-sm flex items-center gap-2">
            <i className="fas fa-lock"></i>
            Join to View Details
          </span>
        )}
      </div>

      <LocationInfo 
        areaCode={event.areaCode} 
        revealedDetails={isParticipant}
      />

      {/* Weather Advisory if available */}
      {event.weatherAdvisory && (
        <div className="bg-orange-500/10 rounded-lg p-4 mt-4">
          <div className="flex items-center gap-2 text-orange-300">
            <i className="fas fa-cloud-sun"></i>
            <span className="font-semibold">Weather Advisory</span>
          </div>
          <p className="text-sm text-gray-300 mt-2">
            {event.weatherAdvisory}
          </p>
        </div>
      )}

      {/* Safety Notes */}
      <div className="text-sm text-gray-400">
        <p className="flex items-center gap-2">
          <i className="fas fa-shield-alt text-orange-500"></i>
          Location safety protocol:
        </p>
        <ul className="mt-2 space-y-1 pl-6 list-disc">
          <li>Meeting point shared 24h before event</li>
          <li>Buddy system in place</li>
          <li>Emergency contacts available</li>
          <li>Guide contact shared via Signal</li>
        </ul>
      </div>
    </div>
  );
}

export {
  LocationInfo,
  MeetingPointSelector,
  LocationDetailsCard,
  AREA_DEFINITIONS
};