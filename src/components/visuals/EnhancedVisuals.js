// src/components/visuals/EnhancedVisuals.js

import React, { useEffect, useRef, useState } from 'react';

// Color palette configuration
const COLORS = {
  neon: {
    orange: 'rgba(255, 123, 77, 0.8)',
    pink: 'rgba(255, 77, 148, 0.8)',
    purple: 'rgba(155, 109, 255, 0.8)',
    blue: 'rgba(77, 196, 255, 0.8)'
  },
  gradient: {
    start: 'rgba(225, 112, 85, 1)',
    end: 'rgba(255, 107, 157, 1)'
  }
};

// Mouse position hook
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

// Star field effect
export function StarField() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(200)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${1 + Math.random() * 2}px`,
            height: `${1 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.1 + Math.random() * 0.5,
            animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
}

// Background energy field
export function EnergyField() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${60 * i}deg, 
              transparent 0%,
              ${Object.values(COLORS.neon)[i % 4]} 50%,
              transparent 100%
            )`,
            animation: `energyFlow ${15 + i * 5}s ease-in-out infinite`,
            animationDelay: `${i * 2}s`,
            opacity: 0.15,
            filter: 'blur(100px)',
            transform: `scale(1.5) rotate(${i * 60}deg)`
          }}
        />
      ))}
    </div>
  );
}

// Interactive glow orbs
export function GlowOrbs({ mousePosition = { x: 0, y: 0 } }) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => {
        const baseDelay = i * 0.2;
        return (
          <div
            key={i}
            className="absolute rounded-full transform-gpu"
            style={{
              width: `${30 + Math.random() * 60}px`,
              height: `${30 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, 
                ${Object.values(COLORS.neon)[i % 4]} 0%,
                transparent 70%)`,
              filter: 'blur(8px)',
              animation: `
                float ${6 + Math.random() * 4}s ease-in-out infinite,
                pulse ${4 + Math.random() * 2}s ease-in-out infinite alternate
              `,
              animationDelay: `${baseDelay}s, ${baseDelay + 1}s`,
              transform: `translate(
                ${(mousePosition.x / window.innerWidth - 0.5) * 30}px,
                ${(mousePosition.y / window.innerHeight - 0.5) * 30}px
              )`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        );
      })}
    </div>
  );
}

// Interactive particle system
export function ParticleSystem({ mousePosition = { x: 0, y: 0 } }) {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 1 + Math.random() * 3,
      speedX: (-1 + Math.random() * 2) * 2,
      speedY: (-1 + Math.random() * 2) * 2,
      life: 1,
      color: Object.values(COLORS.neon)[Math.floor(Math.random() * 4)]
    });

    const initParticles = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array(50).fill().map(createParticle);
    };

    const drawParticle = (particle) => {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.shadowBlur = 15;
      ctx.shadowColor = particle.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    };

    const updateParticle = (particle) => {
      // Mouse interaction
      const dx = mousePosition.x - particle.x;
      const dy = mousePosition.y - particle.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 200) {
        const force = (1 - dist / 200) * 2;
        particle.speedX += (dx / dist) * force;
        particle.speedY += (dy / dist) * force;
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

      // Update life
      particle.life -= 0.001;
      if (particle.life <= 0) Object.assign(particle, createParticle());
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(26, 32, 44, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });

      animationId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
    />
  );
}

// Complete visual system
export function CompleteVisualSystem() {
  const mousePosition = useMousePosition();
  
  return (
    <>
      <StarField />
      <EnergyField />
      <ParticleSystem mousePosition={mousePosition} />
      <GlowOrbs mousePosition={mousePosition} />
    </>
  );
}

// Add necessary animation styles
const animationStyles = `
@keyframes twinkle {
  0%, 100% { opacity: 0.1; }
  50% { opacity: 0.5; }
}

@keyframes energyFlow {
  0% {
    opacity: 0.1;
    transform: scale(1.5) translateX(-50%) rotate(var(--rotation));
  }
  50% {
    opacity: 0.2;
    transform: scale(1.5) translateX(0%) rotate(calc(var(--rotation) + 15deg));
  }
  100% {
    opacity: 0.1;
    transform: scale(1.5) translateX(50%) rotate(var(--rotation));
  }
}

@keyframes float {
  0%, 100% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(20px, -20px);
  }
  50% {
    transform: translate(0, -40px);
  }
  75% {
    transform: translate(-20px, -20px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}
`;

// Insert animation styles into a style tag when component is first loaded
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.appendChild(document.createTextNode(animationStyles));
  document.head.appendChild(styleEl);
}