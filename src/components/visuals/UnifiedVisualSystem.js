// src/components/visuals/UnifiedVisualSystem.js

import React, { useEffect, useRef, useState } from 'react';
import { useMousePosition } from '../../hooks/useUtils';

// Neon color palette
const NEON_COLORS = {
  orange: 'rgba(255, 123, 77, 0.8)',
  pink: 'rgba(255, 77, 148, 0.8)',
  purple: 'rgba(155, 109, 255, 0.8)',
  blue: 'rgba(77, 196, 255, 0.8)'
};

// Interactive particle system with mouse influence
function ParticleField({ mousePosition }) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [...Array(150)].map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 3,
        speedX: (-1 + Math.random() * 2) * 2,
        speedY: (-1 + Math.random() * 2) * 2,
        color: Object.values(NEON_COLORS)[Math.floor(Math.random() * 4)]
      }));
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(26, 32, 44, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Mouse interaction
        if (mousePosition.x && mousePosition.y) {
          const dx = mousePosition.x - particle.x;
          const dy = mousePosition.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 200) {
            const force = (1 - dist / 200) * 2;
            particle.speedX += (dx / dist) * force;
            particle.speedY += (dy / dist) * force;
          }
        }

        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Add drag
        particle.speedX *= 0.99;
        particle.speedY *= 0.99;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

// Festival-inspired light beams
function LightBeams() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-[200%] origin-bottom"
          style={{
            left: `${(i * 20) + Math.sin(i) * 10}%`,
            background: `linear-gradient(${60 + i * 30}deg, 
              ${Object.values(NEON_COLORS)[i % 4]} 0%,
              transparent 60%
            )`,
            animation: `lightBeam ${15 + i * 5}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
            transform: `rotate(${45 + i * 15}deg)`,
            opacity: 0.1
          }}
        />
      ))}
    </div>
  );
}

// Energy field effect
function EnergyField() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, 
              ${Object.values(NEON_COLORS)[i]} 0%,
              transparent 70%
            )`,
            animation: `energyPulse ${8 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 1.5}s`,
            opacity: 0.15,
            transform: `scale(${1 + i * 0.2})`
          }}
        />
      ))}
    </div>
  );
}

// Interactive sparkles that follow mouse movement
function InteractiveSparkles({ mousePosition }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (mousePosition.x && mousePosition.y) {
        setSparkles(prev => {
          const newSparkles = prev.filter(s => Date.now() - s.created < 1000);
          newSparkles.push({
            x: mousePosition.x + (Math.random() - 0.5) * 100,
            y: mousePosition.y + (Math.random() - 0.5) * 100,
            size: 2 + Math.random() * 4,
            color: Object.values(NEON_COLORS)[Math.floor(Math.random() * 4)],
            created: Date.now()
          });
          return newSparkles;
        });
      }
    }, 50);

    return () => clearInterval(interval);
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {sparkles.map((sparkle, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
            background: sparkle.color,
            opacity: 1 - (Date.now() - sparkle.created) / 1000,
            filter: 'blur(1px)',
            transform: `scale(${1 - (Date.now() - sparkle.created) / 1000})`,
            transition: 'all 0.2s ease-out'
          }}
        />
      ))}
    </div>
  );
}

// Main visual system component
export function UnifiedVisualSystem() {
  const mousePosition = useMousePosition();

  return (
    <>
      <div className="fixed inset-0 bg-gray-900" />
      <EnergyField />
      <LightBeams />
      <ParticleField mousePosition={mousePosition} />
      <InteractiveSparkles mousePosition={mousePosition} />
      
      {/* Depth overlay */}
      <div className="fixed inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />
      
      {/* Vignette effect */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.4) 100%)'
        }}
      />
    </>
  );
}

export default UnifiedVisualSystem;