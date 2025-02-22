import React, { useState } from 'react';
import { SignalContactModal } from './system/SignalContactModal';

function Hero() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  const GITBOOK_LINK = "https://dancingchimp.gitbook.io/dancingdragons/";
  
  return (
    <section className="bg-gray-900 text-white">
      <div className="min-h-screen flex items-center justify-center md:pt-16">
        <div className="w-full px-4 py-8 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold space-y-2">
            <div className="text-orange-500">Discover</div>
            <div className="text-orange-500">Adventure</div>
            <div className="text-orange-500">Together</div>
          </h1>
          
          <p className="mt-8 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Join a community of women exploring life's greatest adventures through movement,
            meditation, and meaningful connections.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsSignalModalOpen(true)}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 
                       px-6 py-3 rounded-full text-lg font-semibold flex items-center 
                       justify-center gap-2"
            >
              <i className="fas fa-user-plus" />
              Join Our Community
            </button>
            
            <a 
              href={GITBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-gray-700 hover:border-orange-500
                       hover:bg-orange-500/10 px-6 py-3 rounded-full text-lg 
                       font-semibold flex items-center justify-center gap-2"
            >
              <i className="fas fa-info-circle" />
              Learn More
            </a>
          </div>
        </div>
      </div>

      <SignalContactModal 
        isOpen={isSignalModalOpen}
        onClose={() => setIsSignalModalOpen(false)}
      />
    </section>
  );
}

export default Hero;