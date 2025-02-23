import React, { useState } from 'react';
import CommunityFeature from './CommunityFeature';
import { SignalContactModal } from './system/SignalContactModal';

function Community() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  
  const features = [
    {
      icon: "fa-music",
      title: "Festival Family",
      description: "Join our festival crews for unforgettable weekends of music, dance, and connection."
    },
    {
      icon: "fa-mountain",
      title: "Adventure Crew",
      description: "From hiking trips to beach days, experience the outdoors with your new favorite people."
    },
    {
      icon: "fa-calendar",
      title: "Regular Events",
      description: "Weekly gatherings, monthly adventures, and spontaneous meetups keep the energy flowing."
    },
    {
      icon: "fa-heart",
      title: "True Connections",
      description: "Form genuine friendships with women who love to celebrate life as much as you do."
    },
    {
      icon: "fa-users",
      title: "Your Vibe Tribe",
      description: "Find your people - whether you're a festival fairy, mountain warrior, or both!"
    },
    {
      icon: "fa-star",
      title: "Endless Fun",
      description: "From dance floors to mountain tops, game nights to beach parties - the fun never stops."
    }
  ];

  return (
    <section className="pt-16">
      <div className="py-24 px-4 bg-[#1a202c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-orange-300">Join Our Community</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Find your festival family and adventure crew all in one amazing community. 
              Life's better when we celebrate and explore together!
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

          {/* Community features */}
          <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Vetted Members</h3>
              <p className="text-gray-400">Good vibes only - we keep it safe & fun</p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-ticket"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Group Benefits</h3>
              <p className="text-gray-400">Festival crews & adventure groups</p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Local & Travel</h3>
              <p className="text-gray-400">Both nearby fun & epic adventures</p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-calendar"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Regular Events</h3>
              <p className="text-gray-400">Something fun every week</p>
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