// src/utils/video/videoConfig.js

export const VIDEO_CONFIG = {
  baseUrl: "https://your-cdn-url.com/videos/",  // Replace with your CDN
  accessKeyPrefix: "dd_",  // Prefix for validation
  validKeys: [
    "dd_test123", 
    "dd_demo456"
  ]
};

export const CATEGORIES = [
  'Movement',
  'Meditation',
  'Energy Work',
  'Community Practice'
];

export const VIDEO_CONTENT = [
  {
    id: 'movement-1',
    title: 'Morning Flow Practice',
    description: 'Start your day with energizing movement sequences',
    thumbnail: '/api/placeholder/400/225',
    duration: '15:00',
    category: 'Movement',
    videoUrl: 'morning-flow.mp4',
    featured: true
  },
  {
    id: 'meditation-1',
    title: 'Deep Meditation Guide',
    description: 'Foundation meditation techniques and practices',
    thumbnail: '/api/placeholder/400/225',
    duration: '20:00',
    category: 'Meditation',
    videoUrl: 'meditation-guide.mp4',
    featured: true
  },
  {
    id: 'energy-1',
    title: 'Energy Cultivation Basics',
    description: 'Introduction to internal energy practices',
    thumbnail: '/api/placeholder/400/225',
    duration: '25:00',
    category: 'Energy Work',
    videoUrl: 'energy-basics.mp4',
    featured: false
  }
];