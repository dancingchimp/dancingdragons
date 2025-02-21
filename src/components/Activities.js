import React from 'react';

function ActivityCard({ title, icon, items }) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-gray-700 hover:border-orange-500/30 group transform hover:-translate-y-1">
      <div className="text-orange-500 text-4xl mb-8 bg-orange-500/10 p-4 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="text-2xl font-bold mb-6 text-orange-300">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-4 text-gray-300 group/item">
            <span className="text-orange-500 text-sm mt-2 transform group-hover/item:scale-125 transition-transform">
              <i className="fas fa-diamond"></i>
            </span>
            <span className="text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Activities({ fullPage = false }) {
  const activities = [
    {
      icon: "fa-mountain",
      title: "Adventure & Travel",
      items: [
        "International expeditions",
        "Weekend mountain retreats",
        "Rock climbing experiences",
        "Hiking adventures",
        "Kayaking expeditions"
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
    <section className={`py-32 px-4 bg-gray-900 relative overflow-hidden ${fullPage ? 'pt-40' : ''}`}>
      {/* Background gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"/>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"/>
      
      <div className="max-w-7xl mx-auto relative">
        {fullPage && (
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold text-orange-300 mb-8">
              Our Activities
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore a diverse range of experiences designed to challenge, inspire, and connect.
            </p>
          </div>
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