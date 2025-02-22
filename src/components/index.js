// src/components/index.js

// Export individual components directly
export { default as Hero } from './Hero';
export { default as Activities } from './Activities';
export { default as Community } from './Community';
export { default as FounderSection } from './FounderSection';
export { default as ScrollTopButton } from './ScrollTopButton';

// Export from community folder
export { CommunityFeature } from './community/CommunityFeature';
export { default as CommunityJoin } from './community/CommunityJoin';

// Export from events folder
export { default as Events } from './events/Events';
export { default as EventDetailsModal } from './events/EventDetails';
export { default as RSVPModal } from './events/RSVPModal';
export { LocationDetailsCard } from './events/LocationSystem';

// Export from Navigation
export { default as Navigation } from './Navigation/Navigation';

// Export from video-library folder
export { VideoLibrary } from './video-library/VideoLibrary';
export { VideoCard } from './video-library/VideoCard';
export { VideoPlayer } from './video-library/VideoPlayer';

// Export from system folder
export { Modal } from './system/Modal';
export { SignalContactModal } from './system/SignalContactModal';

// Export from ui folder
export { Card, CardHeader, CardTitle, CardContent } from './ui/Card';