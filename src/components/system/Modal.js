// src/components/system/Modal.js

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export function Modal({ isOpen, onClose, title, children, size = 'md' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-xl',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl'
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div 
        className={`${sizeClasses[size]} w-full max-h-[90vh] overflow-y-auto 
                    bg-gray-900 rounded-xl shadow-2xl border border-gray-700 
                    z-10 transform transition-all duration-300`}
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
        <div className="p-6">
          {children}
        </div>
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