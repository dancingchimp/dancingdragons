import React from 'react';

/**
 * Feature card component for community page
 * 
 * @param {Object} props Component props
 * @param {string} props.title Feature title
 * @param {string} props.description Feature description
 * @param {string} props.icon Font Awesome icon class
 */
function CommunityFeature({ title, description, icon }) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-lg text-center hover:shadow-xl transition-all duration-300">
      <div className="text-orange-500 text-4xl mb-6">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-orange-300">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

export default CommunityFeature;
