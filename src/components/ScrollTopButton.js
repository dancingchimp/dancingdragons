import React from 'react';

/**
 * Button component for scrolling to top of page
 * 
 * @param {Object} props Component props
 * @param {Function} props.onClick Function to handle click
 */
function ScrollTopButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 p-3 rounded-full transition-all transform hover:scale-110 z-40"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default ScrollTopButton;
