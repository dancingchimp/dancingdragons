import React, { useState } from 'react';
import { SignalContactModal } from './system/SignalContactModal';

function Hero() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  const GITBOOK_LINK = "https://dancingchimp.gitbook.io/dancingdragons/";
  
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative px-4 py-16 w-full max-w-screen-xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - heading and text */}
          <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
            <h1 className="flex flex-col gap-2">
              <div className="text-6xl lg:text-7xl font-bold text-orange-500 tracking-tight">
                Adventure
              </div>
              <div className="text-6xl lg:text-7xl font-bold text-orange-500 tracking-tight">
                Awaits
              </div>
              <div className="text-6xl lg:text-7xl font-bold text-orange-500 tracking-tight">
                You
              </div>
            </h1>

            <p className="mt-8 text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Join a thriving community of adventurous women exploring the outdoors, staying active, 
              and building lasting friendships through shared experiences.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setIsSignalModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 
                         rounded-xl text-lg font-semibold transition-all duration-300 
                         hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <i className="fas fa-user-plus" />
                Join Our Community
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
                Explore Activities
              </a>
            </div>

            {/* Highlight Features */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <i className="fas fa-mountain text-orange-500" />
                Outdoor Adventures
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <i className="fas fa-person-running text-orange-500" />
                Active Lifestyle
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <i className="fas fa-heart text-orange-500" />
                Real Connections
              </div>
            </div>
          </div>

          {/* Right side - decorative element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent 
                            rounded-full blur-2xl transform -rotate-12" />
              <div className="absolute inset-10 bg-gradient-to-tr from-orange-500/10 to-transparent 
                            rounded-full blur-xl transform rotate-45" />
              {/* Center icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <i className="fas fa-dragon text-orange-500 text-8xl transform hover:scale-110 
                           transition-transform duration-500" />
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