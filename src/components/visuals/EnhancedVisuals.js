// src/components/visuals/EnhancedVisuals.js

import React, { useEffect, useRef, useState } from 'react';

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

export function EnhancedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-radial from 
                    from-orange-500/5 to-transparent opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b 
                    from-gray-900 via-gray-900/90 to-gray-900" />
    </div>
  );
}

export function ParallaxBackground({ children }) {
  const mousePosition = useMousePosition();
  
  return (
    <div className="relative">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-orange-500/5 to-transparent opacity-20" />
      </div>
      {children}
    </div>
  );
}

export function GlowingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none">
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
            animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            filter: 'blur(2px)'
          }}
        />
      ))}
    </div>
  );
}

export function PulsingCircles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
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
            animation: `pulse ${3 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`
          }}
        />
      ))}
    </div>
  );
}

export function AuroraEffect() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
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
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 100) {
          const angle = Math.atan2(dy, dx);
          particle.vx -= Math.cos(angle) * 0.2;
          particle.vy -= Math.sin(angle) * 0.2;
        }

        particle.x += particle.vx;
        particle.y += particle.vy;

        particle.vx *= 0.99;
        particle.vy *= 0.99;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(225, 112, 85, ${0.3 + Math.random() * 0.2})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    handleResize();
    animate();
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
      className="fixed bottom-0 left-0 right-0 w-full h-32 opacity-30"
      style={{ filter: 'blur(1px)' }}
    />
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