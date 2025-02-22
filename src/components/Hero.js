import React, { useState } from 'react';
import { SignalContactModal } from './system/SignalContactModal';

function Hero() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  const GITBOOK_LINK = "https://dancingchimp.gitbook.io/dancingdragons/";
  
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent"/>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"/>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"/>
      
      <div className="relative w-full px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 safe-area-top pt-16 md:pt-0">
            <div className="mb-6">
              <i className="fas fa-dragon text-orange-500 text-4xl md:text-6xl float"></i>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight px-4">
              <div className="mb-2">
                <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                  Discover
                </span>
              </div>
              <div className="mb-2">
                <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                  Adventure
                </span>
              </div>
              <div>
                <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
                  Together
                </span>
              </div>
            </h1>
            
            <p className="text-lg md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Join a community of women exploring life's greatest adventures through movement,
              meditation, and meaningful connections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 mb-16">
              <button 
                onClick={() => setIsSignalModalOpen(true)}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 
                         px-8 py-4 rounded-full text-lg font-semibold 
                         transition-all duration-300 hover:-translate-y-1 
                         flex items-center justify-center gap-2 
                         active:transform active:scale-95 tap-highlight-none"
              >
                <i className="fas fa-user-plus"></i>
                Join Our Community
              </button>
              
              <a 
                href={GITBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-2 border-white/80 hover:border-orange-500
                         hover:bg-orange-500/10 px-8 py-4 rounded-full text-lg 
                         font-semibold transition-all duration-300 hover:-translate-y-1 
                         flex items-center justify-center gap-2
                         active:transform active:scale-95 tap-highlight-none"
              >
                <i className="fas fa-info-circle"></i>
                Learn More
              </a>
            </div>

            {/* Features grid */}
            <div className="grid md:grid-cols-3 gap-4 px-4">
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
                           hover:border-orange-500/30 transition-all duration-300 
                           transform hover:-translate-y-1"
                >
                  <div className="text-orange-500 text-2xl mb-4">
                    <i className={`fas fa-${feature.icon}`}></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-orange-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
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