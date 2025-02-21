import React from 'react';

function ActivityCard({ title, icon, items }) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
      <div className="text-orange-500 text-4xl mb-6">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="text-2xl font-bold mb-6 text-orange-300">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-300">
            <span className="text-orange-500 text-xs mt-2">●</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityCard;