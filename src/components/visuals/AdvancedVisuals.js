// src/components/visuals/AdvancedVisuals.js

import React, { useEffect, useRef, useState } from 'react';

export function FlowField() {
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
      particles = [...Array(50)].map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 2,
        angle: Math.random() * Math.PI * 2
      }));
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(26, 32, 44, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        const noise = Math.sin(particle.x * 0.01) * Math.cos(particle.y * 0.01);
        particle.angle += noise * 0.1;
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(225, 112, 85, 0.5)';
        ctx.fill();
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
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
    />
  );
}

export function WaveformVisualization() {
  const svgRef = useRef(null);
  const [path, setPath] = useState('');

  useEffect(() => {
    let animationId;
    let phase = 0;

    const generateWaveform = () => {
      const width = 1000;
      const height = 100;
      let d = `M 0 ${height/2}`;

      for (let x = 0; x <= width; x += 5) {
        const y = height/2 + 
                 Math.sin(x * 0.02 + phase) * 20 + 
                 Math.sin(x * 0.01 + phase * 0.5) * 15;
        d += ` L ${x} ${y}`;
      }

      setPath(d);
      phase += 0.05;
      animationId = requestAnimationFrame(generateWaveform);
    };

    generateWaveform();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
      <svg ref={svgRef} viewBox="0 0 1000 100" preserveAspectRatio="none" className="w-full h-full">
        <path 
          d={path} 
          stroke="url(#gradient)" 
          fill="none" 
          strokeWidth="2"
          className="opacity-30"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b9d" />
            <stop offset="50%" stopColor="#e17055" />
            <stop offset="100%" stopColor="#9b6dff" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export function EnhancedLoadingAnimation() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 animate-pulse">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-full border-2 border-orange-500/30"
            style={{
              transform: `scale(${1 + i * 0.2}) rotate(${rotation + i * 30}deg)`,
              animation: `pulse ${2 + i}s ease-in-out infinite`
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <i className="fas fa-dragon text-6xl text-orange-500" />
      </div>
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 to-transparent animate-pulse" />
    </div>
  );
}

export function InteractiveParticles({ mousePosition }) {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const initParticles = () => {
      particlesRef.current = [...Array(100)].map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 2,
        vx: (-1 + Math.random() * 2) * 0.5,
        vy: (-1 + Math.random() * 2) * 0.5
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // React to mouse position
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * 0.2;
          particle.vy -= Math.sin(angle) * 0.2;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225, 112, 85, ${0.3 + Math.random() * 0.2})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
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
    />
  );
}