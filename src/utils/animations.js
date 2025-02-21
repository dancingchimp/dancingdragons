/**
 * Animation utilities
 */

// Animation presets
export const ANIMATIONS = {
  fadeIn: {
    initial: "opacity-0",
    animate: "opacity-100",
    transition: "transition-opacity duration-500"
  },
  slideUp: {
    initial: "opacity-0 translate-y-4",
    animate: "opacity-100 translate-y-0",
    transition: "transition-all duration-500"
  },
  scale: {
    initial: "scale-95 opacity-0",
    animate: "scale-100 opacity-100",
    transition: "transition-all duration-300"
  },
  slideInRight: {
    initial: "opacity-0 -translate-x-4",
    animate: "opacity-100 translate-x-0",
    transition: "transition-all duration-500"
  },
  slideInLeft: {
    initial: "opacity-0 translate-x-4",
    animate: "opacity-100 translate-x-0",
    transition: "transition-all duration-500"
  }
};

/**
 * Get animation classes with optional delay
 * @param {string} type - Animation type from ANIMATIONS
 * @param {number} delay - Delay in milliseconds
 * @returns {Object} Animation classes and style
 */
export function getAnimation(type, delay = 0) {
  const animation = ANIMATIONS[type];
  if (!animation) return { className: '', style: {} };
  
  return {
    className: `${animation.initial} ${animation.animate} ${animation.transition}`,
    style: { transitionDelay: `${delay}ms` }
  };
}

// Transition duration presets
export const TRANSITIONS = {
  default: "transition-all duration-300",
  slow: "transition-all duration-500",
  fast: "transition-all duration-150"
};

/**
 * Stagger children animations with increasing delay
 * @param {number} count - Number of children
 * @param {number} baseDelay - Base delay in ms
 * @param {number} increment - Delay increment per child
 * @returns {Array} Array of delay values
 */
export function getStaggeredDelays(count, baseDelay = 0, increment = 100) {
  return Array.from({ length: count }, (_, i) => baseDelay + (i * increment));
}
