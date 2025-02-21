import React from 'react';

function InterestCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg hover:shadow-xl transition-all duration-300">
      <div className="text-orange-500 text-3xl mb-4">
        <i className={`fas ${icon}`}></i>
      </div>
      <h4 className="text-xl font-semibold mb-2 text-orange-300">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

function ImageCard({ src, alt, label }) {
  return (
    <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-gray-800/50">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="text-white text-lg font-medium">{label}</div>
      </div>
    </div>
  );
}

function FounderSection() {
  const interests = [
    {
      icon: "fa-mountain",
      title: "Hiking Adventures",
      description: "Exploring trails across the globe"
    },
    {
      icon: "fa-music",
      title: "Music Festivals",
      description: "Celebrating life through rhythm"
    },
    {
      icon: "fa-om",
      title: "Yoga Practice",
      description: "Mind-body connection"
    },
    {
      icon: "fa-yin-yang",
      title: "Tai Chi",
      description: "Moving meditation"
    },
    {
      icon: "fa-volleyball",
      title: "Group Sporting Events",
      description: "Building community through play"
    },
    {
      icon: "fa-coins",
      title: "Early Bitcoin Investor",
      description: "$$$ Long-term vision $$$"
    }
  ];

  const images = [
    { src: "/api/placeholder/400/533", alt: "Mountain Trails", label: "Mountain Trails" },
    { src: "/api/placeholder/400/533", alt: "Mindful Movement", label: "Mindful Movement" },
    { src: "/api/placeholder/400/533", alt: "Festival Vibes", label: "Festival Vibes" },
    { src: "/api/placeholder/400/533", alt: "Community Sports", label: "Community Sports" }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-orange-300">Our Story</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building a community where adventure meets authenticity, and where every journey
            contributes to collective growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg mb-8">
              Dancing Dragons began with a simple insight: women often have their richest
              adventures and forge their strongest friendships in spaces focused purely on
              connection and growth.
            </p>

            <div className="bg-gray-800/30 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-300">Passions & Pursuits</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <InterestCard key={index} {...interest} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:mt-8">
            {images.map((image, index) => (
              <ImageCard key={index} {...image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;