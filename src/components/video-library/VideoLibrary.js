// src/components/video-library/VideoLibrary.js

import React, { useState, useEffect } from 'react';
import { VIDEO_CONTENT, CATEGORIES } from '../../utils/video/videoConfig';
import { decryptStorageKey, validateAccessKey } from '../../utils/video/encryption';
import { VideoCard } from './VideoCard';
import { AccessControl } from './AccessControl';
import { VideoPlayer } from './VideoPlayer';

export function VideoLibrary({ fullPage = false }) {
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Check for existing access
    const encryptedKey = localStorage.getItem('dd_access');
    if (encryptedKey) {
      const key = decryptStorageKey(encryptedKey);
      if (key && validateAccessKey(key)) {
        setIsAccessGranted(true);
      }
    }
  }, []);

  const filteredVideos = VIDEO_CONTENT.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (!isAccessGranted) {
    return (
      <section className="py-24 bg-gray-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-300">
              Private Video Library
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Access our curated collection of movement practices, meditation guides,
              and ancient wisdom.
            </p>
          </div>
          <AccessControl onAccess={setIsAccessGranted} />
        </div>
      </section>
    );
  }

  return (
    <section className={`${fullPage ? 'py-32' : 'py-24'} bg-gray-900 text-white px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-300">
            Video Library
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Explore our collection of practices, guides, and wisdom teachings.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search videos..."
                className="px-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 
                         focus:outline-none focus:ring-2 focus:ring-orange-500 w-64"
              />
              <i className="fas fa-search absolute right-3 top-3 text-gray-400"></i>
            </div>
            
            <div className="flex gap-2 flex-wrap justify-center">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All
              </button>
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Videos Section */}
          {selectedCategory === 'all' && searchTerm === '' && (
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-left text-orange-300">
                Featured Videos
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {VIDEO_CONTENT.filter(v => v.featured).map(video => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    onPlay={setSelectedVideo}
                  />
                ))}
              </div>
            </div>
          )}

          {/* All Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map(video => (
              <VideoCard
                key={video.id}
                video={video}
                onPlay={setSelectedVideo}
              />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              <i className="fas fa-search text-4xl mb-4"></i>
              <p>No videos found matching your search criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
}