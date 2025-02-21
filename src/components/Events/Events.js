// File: src/components/Events/Events.js

import React, { useState } from 'react';
import { SignalContactModal } from '../system/SignalContactModal';

function Events() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);

  return (
    <section className="pt-24 px-4 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 text-orange-300">Upcoming Events</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join us for community adventures, movement practices, and growth experiences.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-full text-center py-12">
            <div className="bg-gray-800/50 rounded-xl p-8 max-w-lg mx-auto">
              <i className="fas fa-calendar text-4xl text-orange-500 mb-4"></i>
              <h3 className="text-xl font-semibold text-orange-300 mb-4">
                Join Our Private Events
              </h3>
              <p className="text-gray-300 mb-6">
                Our events are shared privately through Signal groups to ensure privacy and safety.
                Connect with us to access upcoming adventures.
              </p>
              <button
                onClick={() => setIsSignalModalOpen(true)}
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full 
                         text-white font-semibold transition-all duration-300 
                         hover:-translate-y-1 inline-flex items-center gap-2"
              >
                <i className="fas fa-user-plus"></i>
                Get Connected
              </button>
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

export default Events;