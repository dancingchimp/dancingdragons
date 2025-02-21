import React from 'react';
import ActivityCard from './ActivityCard';

function Activities({ fullPage = false }) {
  const activities = [
    {
      icon: "fa-mountain",
      title: "Adventure & Travel",
      items: [
        "International expeditions",
        "Weekend mountain retreats",
        "Rock climbing",
        "Hiking adventures",
        "Kayaking trips"
      ]
    },
    {
      icon: "fa-music",
      title: "Movement & Dance",
      items: [
        "Dance gatherings",
        "Music festivals",
        "Yoga sessions",
        "Movement workshops",
        "Partner dancing"
      ]
    },
    {
      icon: "fa-heart",
      title: "Wellness & Growth",
      items: [
        "Meditation circles",
        "Personal development",
        "Skill sharing",
        "Creative workshops",
        "Community support"
      ]
    }
  ];

  return (
    <section className={`py-24 px-4 bg-gray-900 ${fullPage ? 'pt-32' : ''}`}>
      <div className="max-w-7xl mx-auto">
        {fullPage && (
          <h1 className="text-4xl font-bold text-orange-300 text-center mb-12">
            Our Activities
          </h1>
        )}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <ActivityCard key={index} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Activities;