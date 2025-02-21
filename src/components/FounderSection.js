import React from 'react';

function StoryCard({ title, content, icon }) {
  return (
    <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/30 
                    transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl group">
      <div className="flex items-start gap-6">
        <div className="text-orange-500 text-3xl bg-gray-800/80 p-4 rounded-lg group-hover:scale-110 transition-transform duration-300">
          <i className={`fas ${icon}`}></i>
        </div>
        <div>
          <h4 className="text-2xl font-bold mb-3 text-orange-300 group-hover:text-orange-400 transition-colors">{title}</h4>
          <p className="text-gray-300 leading-relaxed text-lg">{content}</p>
        </div>
      </div>
    </div>
  );
}

function InterestCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl hover:shadow-2xl transition-all duration-500 
                    border border-gray-700/50 hover:border-orange-500/30 group hover:-translate-y-1">
      <div className="text-orange-500 text-3xl mb-4 bg-gray-800/80 p-4 rounded-lg w-fit 
                      group-hover:scale-110 transition-transform duration-300">
        <i className={`fas ${icon}`}></i>
      </div>
      <h4 className="text-xl font-bold mb-2 text-orange-300 group-hover:text-orange-400 transition-colors">{title}</h4>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

function PillarCard({ title, icon = "fa-diamond" }) {
  return (
    <div className="bg-gray-800/30 rounded-xl aspect-square flex flex-col items-center justify-center p-8 
                    hover:bg-gray-800/50 transition-all duration-500 group border border-gray-700/30 
                    hover:border-orange-500/20">
      <i className={`fas ${icon} text-4xl text-orange-500 mb-4 group-hover:scale-125 transition-transform duration-500`}></i>
      <h3 className="text-2xl font-bold text-orange-300 text-center group-hover:text-orange-400 transition-colors">{title}</h3>
    </div>
  );
}

function FounderSection() {
  const story = [
    {
      icon: "fa-rocket",
      title: "Early Bitcoin Vision",
      content: "As an early Bitcoin investor, I made a commitment to hold until 2030's next bull market. This long-term vision reflects my belief in transformative technologies."
    },
    {
      icon: "fa-table-tennis-paddle-ball",
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
      icon: "fa-users",
      title: "Community Building",
      description: "Creating spaces for growth and connection"
    }
  ];

  const pillars = [
    { title: "Adventure", icon: "fa-mountain" },
    { title: "Movement", icon: "fa-music" },
    { title: "Inner Work", icon: "fa-om" },
    { title: "Connection", icon: "fa-users" },
  ];

  return (
    <section className="py-32 bg-[#1a202c] text-white px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-orange-300 relative inline-block">
            Our Story
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building a community where adventure meets wisdom, where every journey
            contributes to collective growth and transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl mb-12 leading-relaxed">
                Dancing Dragons emerged from a vision of creating spaces where women can
                explore both outer adventures and inner landscapes. Through leadership
                and mentorship, we empower members to step into their full potential.
              </p>
            </div>

            <div className="grid gap-6">
              {story.map((item, index) => (
                <StoryCard key={index} {...item} />
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-800/30 to-gray-800/10 rounded-2xl p-10 mt-12 border border-gray-700/30">
              <h3 className="text-3xl font-bold mb-8 text-orange-300">Leadership Vision</h3>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                While I provide resources and guidance, Dancing Dragons thrives through
                distributed leadership. We actively identify and empower women to take
                on leadership roles, creating a sustainable and evolving community.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {interests.map((interest, index) => (
                  <InterestCard key={index} {...interest} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:sticky lg:top-24 h-fit">
            {pillars.map((pillar, index) => (
              <PillarCard key={index} {...pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;