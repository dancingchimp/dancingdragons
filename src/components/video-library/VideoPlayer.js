// src/components/video-library/VideoPlayer.js
import React from 'react';
import { VIDEO_CONFIG } from '../../utils/video/videoConfig';

export function VideoPlayer({ video, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl mx-auto">
        <button 
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-orange-500 
                   transition-colors text-xl"
        >
          <i className="fas fa-times"></i>
        </button>
        
        <div className="aspect-video bg-black rounded-xl overflow-hidden">
          <video
            controls
            className="w-full h-full"
            poster={video.thumbnail}
            src={`${VIDEO_CONFIG.baseUrl}${video.videoUrl}`}
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}