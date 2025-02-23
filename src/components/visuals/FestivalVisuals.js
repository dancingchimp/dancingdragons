// src/components/visuals/FestivalVisuals.js

import React from 'react';

export function VibeWaves() {
  return (
    <svg className="absolute w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      {[1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d="M 0 50 Q 25 ${45 + Math.sin(i) * 5} 50 50 Q 75 ${55 - Math.sin(i) * 5} 100 50"
          className={`stroke-festival-purple/${20 - i * 3} fill-none`}
          style={{
            strokeWidth: '0.5',
            animation: `wave ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </svg>
  );
}

export function MusicVisualizer() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-center gap-1">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="w-1 bg-gradient-to-t from-neon-pink to-festival-purple"
          style={{
            height: `${20 + Math.sin(i * 0.5) * 20}px`,
            animation: `visualizer ${1 + Math.random()}s ease-in-out infinite`,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  );
}

export function LightBeams() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 w-24 h-[200%] origin-top"
          style={{
            left: `${(i * 20) + Math.sin(i) * 10}%`,
            transform: `rotate(${45 + i * 5}deg)`,
            background: `linear-gradient(to bottom, 
              ${i % 2 ? 'rgba(155, 109, 255, 0.1)' : 'rgba(255, 107, 157, 0.1)'} 0%,
              transparent 100%)`,
            animation: `lightBeam ${5 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  );
}

export function ParticleField() {
  return (
    <div className="absolute inset-0">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 ? '#9b6dff' : '#ff6b9d',
            opacity: 0.2,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
}

export function MountainScene() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48">
      <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
        <path
          d="M0 50 L20 15 L40 35 L60 5 L80 25 L100 50 Z"
          className="fill-gray-800/30"
        />
        <path
          d="M0 50 L30 25 L50 40 L70 10 L90 30 L100 50 Z"
          className="fill-gray-800/20"
        />
      </svg>
    </div>
  );
}

export function StarField() {
  return (
    <div className="absolute inset-0">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1 + Math.random() * 0.3,
            animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );
}

export function FestivalScene() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <StarField />
      <LightBeams />
      <ParticleField />
      <MountainScene />
      <div className="absolute inset-0 bg-gradient-festival opacity-10" />
      <div className="absolute inset-0 bg-gradient-sunset opacity-10" />
      <MusicVisualizer />
    </div>
  );
}

// Add these animations to your CSS
const styles = `
@keyframes twinkle {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.4; }
}

@keyframes wave {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20%); }
}

@keyframes visualizer {
  0%, 100% { height: var(--base-height); }
  50% { height: calc(var(--base-height) * 2); }
}

@keyframes lightBeam {
  0%, 100% {
    opacity: 0.05;
    transform: rotate(var(--rotation)) translateY(-10%);
  }
  50% {
    opacity: 0.15;
    transform: rotate(var(--rotation)) translateY(10%);
  }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(10px, -10px); }
  50% { transform: translate(0, -20px); }
  75% { transform: translate(-10px, -10px); }
}
`;