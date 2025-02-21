// File: src/components/Hero.js
// Replaces the existing Hero.js file

import React, { useState } from 'react';
import { SignalContactModal } from './system/SignalContactModal';

function Hero() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  const GITBOOK_LINK = "https://dancingchimp.gitbook.io/dancingdragons/";
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4 pt-16 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent"/>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"/>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"/>
      
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
          <button 
            onClick={() => setIsSignalModalOpen(true)}
            className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 
                     px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 
                     hover:-translate-y-1 hover:shadow-xl group"
          >
            <i className="fas fa-user-plus transform group-hover:scale-110 transition-transform"></i>
            Join Our Community
          </button>
          
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

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="text-orange-500 text-3xl mb-4">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Privacy First</h3>
            <p className="text-gray-400">End-to-end encrypted communication with zero data storage</p>
          </div>
          
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="text-orange-500 text-3xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Real Connections</h3>
            <p className="text-gray-400">Small groups focused on authentic relationships</p>
          </div>
          
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-orange-500/30 transition-all duration-300 group">
            <div className="text-orange-500 text-3xl mb-4">
              <i className="fas fa-heart"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2 text-orange-300">Supportive Growth</h3>
            <p className="text-gray-400">Guided practices and shared adventures</p>
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