import React, { useState } from 'react';
import CommunityFeature from './CommunityFeature';
import { SignalContactModal } from './system/SignalContactModal';

function Community() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  
  const features = [
    {
      icon: "fa-mountain",
      title: "Adventure Together",
      description: "Join regular outdoor expeditions, from day hikes to multi-day adventures, with experienced guides and fellow explorers."
    },
    {
      icon: "fa-person-running",
      title: "Stay Active",
      description: "Participate in group fitness activities, sports events, and outdoor workouts with supportive training partners."
    },
    {
      icon: "fa-compass",
      title: "Expert Guidance",
      description: "Learn from experienced adventurers and athletes in a supportive and encouraging environment."
    },
    {
      icon: "fa-heart",
      title: "Real Connections",
      description: "Form lasting friendships with women who share your passion for adventure and active living."
    },
    {
      icon: "fa-fire",
      title: "Challenge Yourself",
      description: "Push your boundaries and discover your potential through exciting physical challenges and adventures."
    },
    {
      icon: "fa-users",
      title: "Team Spirit",
      description: "Experience the power of teamwork and mutual support in all our activities and adventures."
    }
  ];

  return (
    <section className="pt-16">
      <div className="py-24 px-4 bg-[#1a202c]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6 text-orange-300">Join Our Community</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Be part of an active, supportive community of women who inspire and 
              empower each other through shared adventures and experiences.
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
              <p className="text-gray-400">Personal introduction ensures community safety</p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Small Groups</h3>
              <p className="text-gray-400">Intimate gatherings for better connections</p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-map-marked-alt"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Local Adventures</h3>
              <p className="text-gray-400">Regular activities in your area</p>
            </div>
            
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="text-orange-500 text-2xl mb-4">
                <i className="fas fa-calendar"></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">Regular Events</h3>
              <p className="text-gray-400">Weekly and monthly activities</p>
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