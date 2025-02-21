// src/components/video-library/VideoCard.js
import React from 'react';

export function VideoCard({ video, onPlay }) {
  const { title, description, thumbnail, duration, category } = video;
  
  return (
    <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="aspect-video relative">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 
                     group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          onClick={() => onPlay(video)}
        >
          <i className="fas fa-play text-4xl text-white"></i>
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-sm">
          {duration}
        </div>
      </div>
      <div className="p-4">
        <div className="text-sm text-orange-500 mb-1">{category}</div>
        <h3 className="text-lg font-semibold text-orange-300 mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>
        <button 
          onClick={() => onPlay(video)}
          className="text-sm text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-2"
        >
          <i className="fas fa-play-circle"></i>
          Watch Now
        </button>
      </div>
    </div>
  );
}