// src/components/visuals/EnhancedVisuals.js

import React, { useEffect, useRef } from 'react';

export function SoundWaveCanvas({ color = '#e17055' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const render = () => {
      time += 0.05;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);
      
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + 
                 Math.sin(x * 0.02 + time) * 20 + 
                 Math.sin(x * 0.01 + time * 0.5) * 15;
        ctx.lineTo(x, y);
      }

      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [color]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute bottom-0 left-0 right-0 w-full h-32 opacity-30"
      style={{ filter: 'blur(1px)' }}
    />
  );
}

export function PulsingCircles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full border border-orange-500/20"
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            animation: `pulseCircle ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  );
}

export function GlowingOrbs() {
  return (
    <div className="absolute inset-0">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-gradient-radial"
          style={{
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, 
              ${i % 2 ? 'rgba(255, 107, 157, 0.3)' : 'rgba(155, 109, 255, 0.3)'} 0%,
              transparent 70%)`,
            animation: `floatOrb ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            filter: 'blur(2px)'
          }}
        />
      ))}
    </div>
  );
}

export function InteractiveMountains({ mousePosition }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-64">
      {[1, 2, 3].map((layer) => (
        <div
          key={layer}
          className="absolute inset-0"
          style={{
            transform: `translateX(${(mousePosition.x / window.innerWidth - 0.5) * layer * 10}px)
                       translateY(${(mousePosition.y / window.innerHeight - 0.5) * layer * 5}px)`,
            transition: 'transform 0.3s ease-out'
          }}>
          <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full">
            <path
              d={`M0 50 ${[...Array(5)].map((_, i) => 
                `L${20 * i} ${15 + Math.sin(i) * 10}`).join(' ')} L100 50 Z`}
              className={`fill-gray-800/${30 - layer * 5}`}
            />
          </svg>
        </div>
      ))}
    </div>
  );
}

export function AuroraEffect() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 w-full h-64 origin-center"
          style={{
            background: `linear-gradient(180deg, 
              transparent 0%,
              ${i % 2 ? 'rgba(255, 107, 157, 0.1)' : 'rgba(155, 109, 255, 0.1)'} 50%,
              transparent 100%)`,
            animation: `aurora ${10 + i * 5}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
            transform: `rotate(${-20 + i * 20}deg) translateY(${-50 + i * 20}%)`,
            filter: 'blur(30px)'
          }}
        />
      ))}
    </div>
  );
}

// Add to your global styles:
const styles = `
@keyframes pulseCircle {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.2; }
  50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.1; }
}

@keyframes floatOrb {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(20px, -20px); }
  50% { transform: translate(-10px, -40px); }
  75% { transform: translate(-30px, -20px); }
}

@keyframes aurora {
  0%, 100% { transform: rotate(var(--rotate)) translateY(var(--translate)) translateX(-10%); }
  50% { transform: rotate(var(--rotate)) translateY(var(--translate)) translateX(10%); }
}
`;

export function EnhancedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <AuroraEffect />
      <GlowingOrbs />
      <PulsingCircles />
      <SoundWaveCanvas />
    </div>
  );
}