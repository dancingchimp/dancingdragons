import React from 'react';
import CommunityFeature from './CommunityFeature';

/**
 * Community page component
 */
function Community() {
  const SIGNAL_LINK = "https://signal.me/#eu/--flkIBHugKFa1TKXL56Kmeaedgfnriw96sBgiKuTB1izx9pLetA-K8vts4rIN90";
  
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
            <a 
              href={SIGNAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                bg-orange-500 hover:bg-orange-600 
                px-8 py-4 rounded-full text-lg font-semibold text-white
                transition-all duration-300 hover:-translate-y-1
              "
            >
              <i className="fas fa-user-plus"></i>
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
