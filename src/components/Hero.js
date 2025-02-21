import React from 'react';

function Hero() {
  const SIGNAL_LINK = "https://signal.group/#CjQKIEedMr4WY051GNFTAWZZeQNQUKJmP3RWfQtQvlZ8M M2nEhBMYdI60i9uQ50u3g9Rkmaf";
  const GITBOOK_LINK = "https://dancingchimp.gitbook.io/dancingdragons/";
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 pt-16 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent"/>
      
      <div className="relative text-center max-w-5xl mx-auto py-24">
        <div className="mb-8">
          <i className="fas fa-dragon text-orange-500 text-6xl mb-8 float"></i>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
            Discover Adventure Together
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Join a community of women exploring life's greatest adventures through movement,
          meditation, and meaningful connections.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href={SIGNAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 
                     px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 
                     hover:-translate-y-1 hover:shadow-xl group"
          >
            <i className="fas fa-user-plus transform group-hover:scale-110 transition-transform"></i>
            Join Our Community
          </a>
          
          <a 
            href={GITBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-white/80 hover:border-orange-500
                     hover:bg-orange-500/10 px-8 py-4 rounded-full text-lg font-semibold
                     transition-all duration-300 hover:-translate-y-1 group"
          >
            <i className="fas fa-info-circle transform group-hover:scale-110 transition-transform"></i>
            Learn More
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"/>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"/>
      </div>
    </section>
  );
}

export default Hero;