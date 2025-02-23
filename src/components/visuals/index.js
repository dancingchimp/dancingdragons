// src/components/visuals/index.js

export * from './AdvancedVisuals';
export * from './EnhancedVisuals';
export * from './InteractiveEffects';

// Re-export the specific components to avoid confusion
export {
  FlowField,
  WaveformVisualization,
  EnhancedLoadingAnimation,
  InteractiveParticles
} from './AdvancedVisuals';

export {
  EnhancedBackground,
  GlowingCursor,
  ParallaxBackground,
  StarField as InteractiveStarField,
  RippleEffect
} from './EnhancedVisuals';

export {
  useMousePosition
} from './InteractiveEffects';