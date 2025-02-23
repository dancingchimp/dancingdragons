// src/components/visuals/InteractiveEffects.js

import React, { useEffect, useState } from 'react';

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
}

export function GlowingCursor() {
  const mousePosition = useMousePosition();

  return (
    <div
      className="fixed w-64 h-64 pointer-events-none mix-blend-screen"
      style={{
        left: mousePosition.x - 128,
        top: mousePosition.y - 128,
        background: 'radial-gradient(circle, rgba(225, 112, 85, 0.15) 0%, transparent 70%)',
        transition: 'all 0.1s ease-out',
        filter: 'blur(10px)'
      }}
    />
  );
}

export function ParallaxBackground({ children }) {
  const mousePosition = useMousePosition();
  const [elements] = useState([...Array(10)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 5 + Math.random() * 20,
    speed: 0.02 + Math.random() * 0.08
  })));

  return (
    <div className="relative overflow-hidden">
      {elements.map((element, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-radial from-festival-purple/10 to-transparent"
          style={{
            width: `${element.size}px`,
            height: `${element.size}px`,
            left: `${element.x}%`,
            top: `${element.y}%`,
            transform: `translate(
              ${(mousePosition.x / window.innerWidth - 0.5) * 100 * element.speed}px,
              ${(mousePosition.y / window.innerHeight - 0.5) * 100 * element.speed}px
            )`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      ))}
      {children}
    </div>
  );
}

export function InteractiveStarField() {
  const mousePosition = useMousePosition();
  const [stars] = useState([...Array(100)].map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2,
    speed: 0.01 + Math.random() * 0.04
  })));

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: 0.1 + Math.random() * 0.3,
            transform: `translate(
              ${(mousePosition.x / window.innerWidth - 0.5) * 50 * star.speed}px,
              ${(mousePosition.y / window.innerHeight - 0.5) * 50 * star.speed}px
            )`,
            transition: 'transform 0.2s ease-out',
            animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`
          }}
        />
      ))}
    </div>
  );
}

export function RippleEffect() {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now()
    };
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute border border-orange-500/20 rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '20px',
            height: '20px',
            transform: 'translate(-50%, -50%)',
            animation: 'ripple 1s ease-out forwards'
          }}
        />
      ))}
    </div>
  );
}