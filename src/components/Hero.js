import React, { useState } from 'react';
import { SignalContactModal } from './system/SignalContactModal';

function Hero() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  const GITBOOK_LINK = "https://dancingchimp.gitbook.io/dancingdragons/";
  
  return (
    <div className="px-4 py-8 bg-gray-900">
      <div className="max-w-md mx-auto text-center">
        <h1 className="mb-8">
          <div className="text-5xl font-bold text-orange-500">Discover</div>
          <div className="text-5xl font-bold text-orange-500">Adventure</div>
          <div className="text-5xl font-bold text-orange-500">Together</div>
        </h1>
        
        <p className="text-lg text-gray-300 mb-12">
          Join a community of women exploring life's greatest adventures through movement,
          meditation, and meaningful connections.
        </p>

        <div className="space-y-4">
          <button 
            onClick={() => setIsSignalModalOpen(true)}
            className="w-full bg-orange-500 text-white rounded-full py-4 text-lg font-semibold"
          >
            Join Our Community
          </button>
          
          <a 
            href={GITBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block border border-gray-700 text-white rounded-full 
                     py-4 text-lg font-semibold"
          >
            Learn More
          </a>
        </div>
      </div>

      <SignalContactModal 
        isOpen={isSignalModalOpen}
        onClose={() => setIsSignalModalOpen(false)}
      />
    </div>
  );
}

export default Hero;