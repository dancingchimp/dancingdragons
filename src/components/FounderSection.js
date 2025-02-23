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
      icon: "fa-music",
      title: "Festival Fanatic",
      content: "My journey started at music festivals, where I discovered the magic of bringing people together through shared experiences and rhythm."
    },
    {
      icon: "fa-gem",
      title: "Early Bitcoin Investor",
      content: "While my early Bitcoin investments could allow for early retirement in 2030, I want to experience the genuine grind of my 20s first. Success feels better when you've earned it through hard work."
    },
    {
      icon: "fa-om",
      title: "Personal Practice",
      content: "My background in eastern philosophy and meditation has shaped how I approach building authentic connections and fostering community spirit."
    },
    {
      icon: "fa-mountain",
      title: "Adventure Spirit",
      content: "Through leading outdoor trips and organizing events, I've found my passion in creating spaces where women can thrive together."
    }
  ];

  const interests = [
    {
      icon: "fa-music",
      title: "Festival Life",
      description: "Creating magical moments at music festivals"
    },
    {
      icon: "fa-mountain",
      title: "Outdoor Adventures",
      description: "Leading trips and exploring nature"
    },
    {
      icon: "fa-users",
      title: "Community Building",
      description: "Bringing amazing women together"
    },
    {
      icon: "fa-heart",
      title: "Connection Creator",
      description: "Fostering authentic friendships"
    }
  ];

  const pillars = [
    { title: "Music", icon: "fa-music" },
    { title: "Adventure", icon: "fa-mountain" },
    { title: "Connection", icon: "fa-users" },
    { title: "Fun", icon: "fa-heart" },
  ];

  return (
    <section className="py-32 bg-gray-900 text-white px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-orange-300 relative inline-block">
            Meet Your Host
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Hey! I'm the founder of Dancing Dragons, and I'm passionate about creating unforgettable 
            experiences that bring women together - whether it's at a festival, on a mountain, or anywhere in between.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="prose prose-lg text-gray-300">
              <p className="text-xl mb-12 leading-relaxed">
                I created Dancing Dragons because I believe in the power of shared experiences. 
                From dancing until sunrise at festivals to conquering mountain peaks together, 
                I've seen how these moments create lasting bonds between women.
              </p>
            </div>

            <div className="grid gap-6">
              {story.map((item, index) => (
                <StoryCard key={index} {...item} />
              ))}
            </div>

            <div className="bg-gradient-to-r from-gray-800/30 to-gray-800/10 rounded-2xl p-10 mt-12 border border-gray-700/30">
              <h3 className="text-3xl font-bold mb-8 text-orange-300">My Vision</h3>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                While I facilitate and organize, Dancing Dragons is about all of us. I encourage every 
                member to bring their unique energy - whether that's organizing a festival group, 
                leading a hike, or hosting a game night.
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