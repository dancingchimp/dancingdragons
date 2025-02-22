import React, { useState } from 'react';
import { SignalContactModal } from './system/SignalContactModal';

function Hero() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  const GITBOOK_LINK = "https://dancingchimp.gitbook.io/dancingdragons/";
  
  return (
    <div className="bg-gray-900 min-h-[100vh] min-h-[calc(var(--vh,1vh)*100)] flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          {/* Title Section */}
          <h1 className="font-bold">
            <div className="text-5xl sm:text-6xl md:text-7xl text-orange-500">Discover</div>
            <div className="text-5xl sm:text-6xl md:text-7xl text-orange-500">Adventure</div>
            <div className="text-5xl sm:text-6xl md:text-7xl text-orange-500">Together</div>
          </h1>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Join a community of women exploring life's greatest adventures through movement,
            meditation, and meaningful connections.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setIsSignalModalOpen(true)}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 
                       px-8 py-4 rounded-full text-lg font-semibold text-white
                       transition-colors active:transform active:scale-95
                       flex items-center justify-center gap-2"
            >
              <i className="fas fa-user-plus" />
              Join Our Community
            </button>
            
            <a 
              href={GITBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-gray-700 hover:border-orange-500
                       hover:bg-orange-500/10 px-8 py-4 rounded-full text-lg font-semibold 
                       text-white transition-colors active:transform active:scale-95
                       flex items-center justify-center gap-2"
            >
              <i className="fas fa-info-circle" />
              Learn More
            </a>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {[
              {
                icon: "shield-alt",
                title: "Privacy First",
                desc: "End-to-end encrypted with zero data storage"
              },
              {
                icon: "users",
                title: "Real Connections",
                desc: "Small groups focused on authentic relationships"
              },
              {
                icon: "heart",
                title: "Supportive Growth",
                desc: "Guided practices and shared adventures"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700
                         hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="text-orange-500 text-2xl mb-3">
                  <i className={`fas fa-${feature.icon}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-orange-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
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