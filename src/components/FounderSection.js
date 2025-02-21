import React from 'react';
import { motion } from 'framer-motion';

function StoryCard({ title, content, icon }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700 hover:border-orange-500/30 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="text-orange-500 text-2xl">
          <i className={`fas ${icon}`}></i>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-2 text-orange-300">{title}</h4>
          <p className="text-gray-300 leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}

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
    <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-gray-800/50 group">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="text-white text-lg font-medium">{label}</div>
      </div>
    </div>
  );
}

function FounderSection() {
  const story = [
    {
      icon: "fa-bitcoin",
      title: "Early Bitcoin Vision",
      content: "As an early Bitcoin investor, I made a commitment to hold until 2030's next bull market. This long-term vision reflects my belief in transformative technologies."
    },
    {
      icon: "fa-tennis-ball",
      title: "Athletic Background",
      content: "Growing up immersed in tennis, I learned discipline, strategy, and the importance of continuous improvement."
    },
    {
      icon: "fa-om",
      title: "Eastern Philosophy",
      content: "Through exploring psychedelics, eastern philosophy, and psychology, I discovered profound insights about energy underlying all physical reality."
    },
    {
      icon: "fa-yin-yang",
      title: "Internal Arts",
      content: "My journey led me to research internal martial arts and ancient energetic practices, deepening my understanding of mind-body connection."
    }
  ];

  const interests = [
    {
      icon: "fa-mountain",
      title: "Adventure Seeker",
      description: "Leading expeditions and exploring new horizons"
    },
    {
      icon: "fa-music",
      title: "Movement & Dance",
      description: "Expressing through rhythm and flow"
    },
    {
      icon: "fa-brain",
      title: "Consciousness",
      description: "Exploring states of awareness"
    },
    {
      icon: "fa-hands-holding-circle",
      title: "Community Building",
      description: "Creating spaces for growth"
    }
  ];

  const images = [
    { src: "/api/placeholder/400/533", alt: "Mountain Trails", label: "Adventure" },
    { src: "/api/placeholder/400/533", alt: "Mindful Movement", label: "Movement" },
    { src: "/api/placeholder/400/533", alt: "Meditation", label: "Inner Work" },
    { src: "/api/placeholder/400/533", alt: "Community", label: "Connection" }
  ];

  return (
    <section className="py-24 bg-gray-900 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-300">Our Story</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building a community where adventure meets wisdom, where every journey
            contributes to collective growth and transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="prose prose-lg text-gray-300">
              <p className="text-lg mb-8">
                Dancing Dragons emerged from a vision of creating spaces where women can
                explore both outer adventures and inner landscapes. Through leadership
                and mentorship, we empower members to step into their full potential.
              </p>
            </div>

            <div className="grid gap-4">
              {story.map((item, index) => (
                <StoryCard key={index} {...item} />
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-800/30 to-gray-800/10 rounded-xl p-8 mt-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-300">Leadership Vision</h3>
              <p className="text-gray-300 mb-6">
                While I provide resources and guidance, Dancing Dragons thrives through
                distributed leadership. We actively identify and empower women to take
                on leadership roles, creating a sustainable and evolving community.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <InterestCard key={index} {...interest} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-24 h-fit">
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