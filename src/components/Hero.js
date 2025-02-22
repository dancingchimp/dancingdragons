import React, { useState } from 'react';
import { SignalContactModal } from './system/SignalContactModal';

function Hero() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  const GITBOOK_LINK = "https://dancingchimp.gitbook.io/dancingdragons/";
  
  return (
    <div className="bg-[#1a202c] min-h-screen flex flex-col items-center justify-center px-4">
      {/* Main Content */}
      <div className="text-center mt-12">
        <h1 className="text-5xl font-bold mb-12">
          <div className="text-orange-500 mb-2">Discover</div>
          <div className="text-orange-500 mb-2">Adventure</div>
          <div className="text-orange-500">Together</div>
        </h1>
        
        <p className="text-gray-300 text-lg mb-12 max-w-lg mx-auto">
          Join a community of women exploring life's greatest adventures through movement,
          meditation, and meaningful connections.
        </p>

        {/* Buttons with rounded corners */}
        <div className="space-y-4">
          <button 
            onClick={() => setIsSignalModalOpen(true)}
            className="w-full bg-orange-500 py-4 rounded-full text-white font-semibold"
          >
            Join Our Community
          </button>
          
          <a 
            href={GITBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-block border border-gray-600 py-4 rounded-full 
                     text-white font-semibold hover:bg-gray-800"
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