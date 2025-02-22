// src/components/events/LocationSystem.js
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';

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
  downtown_area: {
    name: 'Downtown Area',
    region: 'Urban',
    difficultyLevel: 'Easy',
    approxDistance: 'Central',
    terrain: 'Urban',
    elevation: '0-100 ft',
    permitRequired: false
  },
  waterfront_park: {
    name: 'Waterfront Parks',
    region: 'Urban Nature',
    difficultyLevel: 'Easy',
    approxDistance: '15-30 mins from city',
    terrain: 'Coastal, Parks',
    elevation: '0-200 ft',
    permitRequired: false
  }
};

export function LocationDetailsCard({ event, isParticipant }) {
  const area = AREA_DEFINITIONS[event.areaCode];
  
  if (!area) return null;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Location Details</CardTitle>
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
      </CardHeader>
      <CardContent className="space-y-4">
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

        {/* Revealed Details for Participants */}
        {isParticipant && (
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
      </CardContent>
    </Card>
  );
}

export default LocationDetailsCard;