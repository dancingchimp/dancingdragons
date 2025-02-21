import React from 'react';

function Hero() {
  const SIGNAL_LINK = "https://signal.group/#CjQKIEedMr4WY051GNFTAWZZeQNQUKJmP3RWfQtQvlZ8M M2nEhBMYdI60i9uQ50u3g9Rkmaf";
  const GITBOOK_LINK = "https://dancingchimp.gitbook.io/dancingdragons/";
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Discover Adventure Together
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-300">
          Join a community of women exploring life's greatest adventures
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href={SIGNAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            <i className="fas fa-user-plus"></i>
            Join Our Community
          </a>
          <a 
            href={GITBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border-2 border-white hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
          >
            <i className="fas fa-info-circle"></i>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;