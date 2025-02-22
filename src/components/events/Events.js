// src/components/events/Events.js
import React, { useState } from 'react';
import { SignalContactModal } from '../system/SignalContactModal';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { useMediaQuery } from '../../hooks/useUtils';

function Events() {
  const [isSignalModalOpen, setIsSignalModalOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className={`min-h-screen bg-gray-900 ${isMobile ? 'pt-20' : 'pt-32'} px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300">
            Upcoming Events
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Join us for community adventures, movement practices, and growth experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="col-span-full">
            <CardHeader>
              <div className="text-center">
                <i className="fas fa-calendar text-4xl text-orange-500 mb-4"></i>
                <CardTitle>Join Our Private Events</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-6 text-center">
                Our events are shared privately through Signal groups to ensure privacy and safety.
                Connect with us to access upcoming adventures.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => setIsSignalModalOpen(true)}
                  className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full 
                           text-white font-semibold transition-all duration-300 
                           hover:-translate-y-1 inline-flex items-center gap-2
                           active:transform active:scale-95"
                >
                  <i className="fas fa-user-plus"></i>
                  Get Connected
                </button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Privacy Features */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: "fa-shield-alt",
              title: "End-to-End Encryption",
              desc: "Secure communication"
            },
            {
              icon: "fa-user-secret",
              title: "Private Groups",
              desc: "Vetted members only"
            },
            {
              icon: "fa-location-dot",
              title: "Location Privacy",
              desc: "Secure meeting points"
            },
            {
              icon: "fa-database",
              title: "Zero Storage",
              desc: "No personal data kept"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700
                                     hover:border-orange-500/30 transition-all duration-300
                                     transform hover:-translate-y-1">
              <div className="text-orange-500 text-2xl mb-4">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-orange-300">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
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