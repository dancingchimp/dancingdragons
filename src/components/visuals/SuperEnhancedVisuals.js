// src/components/visuals/SuperEnhancedVisuals.js

import React, { useEffect, useRef, useState } from 'react';

const NEON_COLORS = {
  orange: 'rgba(255, 123, 77, 0.8)',  // Brighter orange
  pink: 'rgba(255, 77, 148, 0.8)',    // Vibrant pink
  purple: 'rgba(155, 109, 255, 0.8)', // Electric purple
  blue: 'rgba(77, 196, 255, 0.8)'     // Bright blue
};

export function DynamicFlowField({ mousePosition }) {
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
        speed: 2 + Math.random() * 4,
        angle: Math.random() * Math.PI * 2,
        size: 1 + Math.random() * 3,
        color: Object.values(NEON_COLORS)[Math.floor(Math.random() * 4)]
      }));
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(26, 32, 44, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Create mouse influence area
      const mouseRadius = 200;
      
      particles.forEach(particle => {
        // Mouse interaction
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < mouseRadius) {
          const force = (1 - dist / mouseRadius) * 2;
          particle.angle = Math.atan2(dy, dx) + Math.PI;
          particle.speed = Math.max(particle.speed, 5 * force);
        }

        const noise = Math.sin(particle.x * 0.02 + particle.y * 0.02);
        particle.angle += noise * 0.2;
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        // Wrap around edges with fade
        if (particle.x < 0) { particle.x = canvas.width; particle.size = 1; }
        if (particle.x > canvas.width) { particle.x = 0; particle.size = 1; }
        if (particle.y < 0) { particle.y = canvas.height; particle.size = 1; }
        if (particle.y > canvas.height) { particle.y = 0; particle.size = 1; }

        // Draw particle with glow effect
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Add glow
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
      style={{ opacity: 0.7 }}
    />
  );
}

export function EnergySpheres({ mousePosition }) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${30 + Math.random() * 60}px`,
            height: `${30 + Math.random() * 60}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, 
              ${Object.values(NEON_COLORS)[i % 4]} 0%,
              transparent 70%)`,
            animation: `
              float ${7 + Math.random() * 7}s ease-in-out infinite,
              pulse ${4 + Math.random() * 3}s ease-in-out infinite alternate
            `,
            animationDelay: `${Math.random() * 5}s`,
            filter: 'blur(8px)',
            transform: `translate(
              ${(mousePosition.x / window.innerWidth - 0.5) * 50}px,
              ${(mousePosition.y / window.innerHeight - 0.5) * 50}px
            )`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      ))}
    </div>
  );
}

export function NeonWaves() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-full h-screen"
          style={{
            background: `linear-gradient(${60 + i * 30}deg,
              transparent 0%,
              ${Object.values(NEON_COLORS)[i % 4]} 50%,
              transparent 100%
            )`,
            animation: `neonWave ${20 + i * 5}s ease-in-out infinite`,
            animationDelay: `${i * 3}s`,
            transform: `rotate(${i * 60}deg) scale(2)`,
            filter: 'blur(100px)',
            opacity: 0.3
          }}
        />
      ))}
    </div>
  );
}

export function InteractiveSparkles({ mousePosition }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles(prev => {
        const newSparkles = [...prev.filter(s => Date.now() - s.created < 1000)];
        if (mousePosition.x && mousePosition.y) {
          newSparkles.push({
            x: mousePosition.x + (Math.random() - 0.5) * 100,
            y: mousePosition.y + (Math.random() - 0.5) * 100,
            size: 2 + Math.random() * 4,
            color: Object.values(NEON_COLORS)[Math.floor(Math.random() * 4)],
            created: Date.now()
          });
        }
        return newSparkles;
      });
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
            filter: 'blur(1px)',
            opacity: 1 - (Date.now() - sparkle.created) / 1000,
            transform: `scale(${1 - (Date.now() - sparkle.created) / 1000})`,
            transition: 'all 0.2s ease-out'
          }}
        />
      ))}
    </div>
  );
}

export function DynamicBackground() {
  const mousePosition = useMousePosition();
  
  return (
    <>
      <DynamicFlowField mousePosition={mousePosition} />
      <NeonWaves />
      <EnergySpheres mousePosition={mousePosition} />
      <InteractiveSparkles mousePosition={mousePosition} />
    </>
  );
}