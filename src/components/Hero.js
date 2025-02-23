import React, { useState } from 'react';
import { SignalContactModal } from './system/SignalContactModal';

function Hero() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  const GITBOOK_LINK = "https://dancingchimp.gitbook.io/dancingdragons/";
  
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gray-900">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full 
                      bg-gradient-radial from-orange-500/5 to-transparent opacity-50" />
      </div>

      <div className="relative px-4 py-16 w-full max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - heading and text */}
          <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
            <h1 className="flex flex-col gap-2">
              <div className="text-6xl lg:text-7xl font-bold text-orange-500 tracking-tight">
                Party
              </div>
              <div className="text-6xl lg:text-7xl font-bold text-orange-500 tracking-tight">
                Adventure
              </div>
              <div className="text-6xl lg:text-7xl font-bold text-orange-500 tracking-tight">
                Grow
              </div>
            </h1>

            <p className="mt-8 text-xl lg:text-2xl text-gray-300 leading-relaxed">
              We're living life to the fullest - dancing at festivals, exploring mountain peaks, 
              and grinding through our 20s together. Join a community of women who believe in 
              earning their story.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setIsSignalModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 
                         rounded-xl text-lg font-semibold transition-all duration-300 
                         hover:-translate-y-1 flex items-center justify-center gap-2
                         group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600/0 via-white/20 to-orange-600/0 
                              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <i className="fas fa-sparkles" />
                Join The Adventure
              </button>
              
              <a 
                href={GITBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 text-white px-8 py-4 
                         rounded-xl text-lg font-semibold transition-all duration-300
                         hover:bg-gray-800/50 hover:border-orange-500/30
                         flex items-center justify-center gap-2"
              >
                <i className="fas fa-compass" />
                Learn More
              </a>
            </div>

            {/* Enhanced Feature Highlights */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
              <div className="bg-gray-800/30 rounded-lg p-3 flex items-center gap-2 group hover:bg-gray-800/50 transition-all">
                <i className="fas fa-music text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">Festival Life</span>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-3 flex items-center gap-2 group hover:bg-gray-800/50 transition-all">
                <i className="fas fa-mountain text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">Epic Adventures</span>
              </div>
              <div className="bg-gray-800/30 rounded-lg p-3 flex items-center gap-2 group hover:bg-gray-800/50 transition-all">
                <i className="fas fa-bolt text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300">Real Growth</span>
              </div>
            </div>
          </div>

          {/* Right side - enhanced decorative element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Animated background elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent 
                            rounded-full blur-2xl transform -rotate-12 animate-pulse" />
              <div className="absolute inset-10 bg-gradient-to-tr from-orange-500/10 to-transparent 
                            rounded-full blur-xl transform rotate-45 animate-pulse" />
              {/* Interactive icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-dragon text-orange-500 text-8xl transform hover:scale-110 
                           transition-transform duration-500 filter drop-shadow-lg" />
              </div>
            </div>
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