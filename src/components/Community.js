// File: src/components/Community.js
// Replaces the existing Community.js file

import React, { useState } from 'react';
import CommunityFeature from './CommunityFeature';
import { SignalContactModal } from './system/SignalContactModal';

function Community() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  
  const features = [
    {
      icon: "fa-users",
      title: "Build Real Connections",
      description: "Form lasting friendships with women who share your passions for adventure and growth."
    },
    {
      icon: "fa-heart",
      title: "Supportive Environment",
      description: "Experience a drama-free space focused on genuine connections and mutual support."
    },
    {
      icon: "fa-compass",
      title: "Expert Guidance",
      description: "Learn from experienced adventurers in a supportive and encouraging setting."
    },
    {
      icon: "fa-fire",
      title: "Shared Adventures",
      description: "Create unforgettable memories with fellow adventurers on exciting journeys."
    },
    {
      icon: "fa-seedling",
      title: "Personal Growth",
      description: "Develop new skills and discover your potential in a nurturing community."
    },
    {
      icon: "fa-puzzle-piece",
      title: "Find Your Tribe",
      description: "Connect with women who understand and share your adventurous spirit."
    }
  ];

  return (
    <section className="pt-16">
      <div className="py-24 px-4 bg-[#1a202c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-orange-300">Join Our Community</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Be part of something special. Connect with women who inspire,
              encourage, and empower each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <CommunityFeature key={index} {...feature} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => setIsSignalModalOpen(true)}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 
                      px-8 py-4 rounded-full text-lg font-semibold text-white
                      transition-all duration-300 hover:-translate-y-1"
            >
              <i className="fas fa-user-plus"></i>
              Join Our Community
            </button>
          </div>

          {/* Privacy features */}
          <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Vetted Members</h3>
              <p className="text-gray-400">Personal introduction ensures community safety</p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Encrypted Chats</h3>
              <p className="text-gray-400">End-to-end encrypted Signal groups</p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-user-secret"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Private Events</h3>
              <p className="text-gray-400">Location details shared securely</p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-database"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Zero Storage</h3>
              <p className="text-gray-400">No personal data stored</p>
            </div>
          </div>
        </div>
      </div>

      <SignalContactModal 
        isOpen={isSignalModalOpen}
        onClose={() => setIsSignalModalOpen(false)}
      />
    </section>
  );
}

export default Community;