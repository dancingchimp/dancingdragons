// src/components/ScrollTopButton.js

import React from 'react';

function ScrollTopButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white 
                 p-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
}

export default ScrollTopButton;