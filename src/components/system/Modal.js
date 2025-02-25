// src/components/system/Modal.js

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
      
      // Add a small timeout to ensure modal is rendered before scrolling
      setTimeout(() => {
        // Ensure the modal is in view
        if (modalRef.current) {
          modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop with click handler to close */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        ref={modalRef}
        className={`${sizeClasses[size]} w-full max-h-[90vh] overflow-y-auto 
                    bg-gray-900 rounded-xl shadow-2xl border border-gray-700 
                    z-10 transform transition-all duration-300 relative`}
      >
        {/* Header if title is provided */}
        {title && (
          <div className="sticky top-0 flex items-center justify-between p-6 
                        border-b border-gray-700 bg-gray-900/95 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-orange-300">{title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors p-2"
              aria-label="Close modal"
            >
              <i className="fas fa-times text-xl" />
            </button>
          </div>
        )}

        {/* Body */}
        <div className="p-6 relative">
          {children}
        </div>
        
        {/* If there's no title, add a close button to the top right */}
        {!title && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 
                     bg-gray-800/50 rounded-full hover:bg-gray-700/50"
            aria-label="Close modal"
          >
            <i className="fas fa-times" />
          </button>
        )}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl'])
};

export default Modal;