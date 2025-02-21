// File: src/components/community/CommunityJoin.js

import React, { useState } from 'react';

const SIGNAL_GROUPS = {
  general: {
    link: "https://signal.group/#CjQKIEedMr4WY051GNFTAWZZeQNQUKJmP3RWfQtQvlZ8MM2nEhBMYdI60i9uQ50u3g9Rkmaf",
    title: "Main Community",
    description: "Our primary group for announcements and general discussion",
    icon: "fa-users",
    features: [
      "Community announcements",
      "General discussion",
      "Event coordination",
      "New member welcome"
    ]
  },
  adventure: {
    link: "https://signal.group/#adventure-link",
    title: "Adventure & Travel",
    description: "Plan and coordinate outdoor activities and expeditions",
    icon: "fa-mountain",
    features: [
      "Trip planning",
      "Gear discussions",
      "Route sharing",
      "Adventure coordination"
    ]
  },
  movement: {
    link: "https://signal.group/#movement-link",
    title: "Movement & Dance",
    description: "Coordinate dance gatherings and movement practices",
    icon: "fa-music",
    features: [
      "Session planning",
      "Music sharing",
      "Technique discussion",
      "Event organization"
    ]
  },
  inner_work: {
    link: "https://signal.group/#inner-work-link",
    title: "Inner Work",
    description: "Connect for meditation and personal growth",
    icon: "fa-om",
    features: [
      "Practice sharing",
      "Group meditation",
      "Book discussions",
      "Wisdom teachings"
    ]
  }
};

function GroupCard({ groupKey, group, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(groupKey)}
      className={`w-full p-6 rounded-xl border transition-all duration-300 text-left
        ${isSelected 
          ? 'bg-orange-500/10 border-orange-500/50 text-orange-300 transform scale-102' 
          : 'bg-gray-800/30 border-gray-700 text-gray-300 hover:bg-gray-800/50'}`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-4 rounded-lg bg-gray-800/80 text-orange-500
          ${isSelected ? 'scale-110' : ''} transition-transform duration-300`}>
          <i className={`fas ${group.icon} text-2xl`}></i>
        </div>
        <div>
          <div className="font-bold text-lg mb-1">{group.title}</div>
          <div className="text-sm text-gray-400">{group.description}</div>
        </div>
      </div>
    </button>
  );
}

function FeaturesList({ features }) {
  return (
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3 text-gray-300">
          <i className="fas fa-check-circle text-orange-500"></i>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

function PrivacyFeatures() {
  const features = [
    {
      icon: "fa-shield-alt",
      title: "End-to-End Encryption",
      description: "All communication is fully encrypted and secure"
    },
    {
      icon: "fa-user-shield",
      title: "Zero Data Storage",
      description: "No personal data stored on our servers"
    },
    {
      icon: "fa-key",
      title: "Private Groups",
      description: "Invite-only Signal groups for member privacy"
    },
    {
      icon: "fa-user-secret",
      title: "Anonymous Participation",
      description: "Participate without sharing personal details"
    }
  ];

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-gray-800/30">
          <i className={`fas ${feature.icon} text-orange-500 mt-1`}></i>
          <div>
            <div className="font-semibold text-orange-300">{feature.title}</div>
            <div className="text-sm text-gray-400">{feature.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function CommunityJoin() {
  const [selectedGroup, setSelectedGroup] = useState('general');
  const currentGroup = SIGNAL_GROUPS[selectedGroup];
  
  return (
    <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"/>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"/>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-orange-300">
            Join Our Community
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with adventurous spirits in our private Signal groups.
            Experience genuine connections while maintaining your privacy.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Group Selection */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-orange-300 mb-6">Choose Your Groups</h2>
            {Object.entries(SIGNAL_GROUPS).map(([key, group]) => (
              <GroupCard
                key={key}
                groupKey={key}
                group={group}
                isSelected={selectedGroup === key}
                onSelect={setSelectedGroup}
              />
            ))}
          </div>

          {/* Selected Group Details */}
          <div className="lg:sticky lg:top-24 space-y-8">
            <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-2xl font-bold text-orange-300 mb-6">
                {currentGroup.title} Features
              </h3>
              <FeaturesList features={currentGroup.features} />
              
              <a
                href={currentGroup.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 
                         rounded-xl flex items-center justify-center gap-3 transition-all duration-300
                         hover:transform hover:-translate-y-1 font-semibold text-lg"
              >
                <i className="fas fa-user-plus"></i>
                Join {currentGroup.title}
              </a>
            </div>

            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-orange-300 mb-6">
                Privacy-First Community
              </h3>
              <PrivacyFeatures />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommunityJoin;