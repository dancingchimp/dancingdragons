// src/components/ui/Card.js
import React from 'react';
import PropTypes from 'prop-types';

export function Card({ className = '', children, ...props }) {
  return (
    <div 
      className={`bg-gray-800/50 rounded-xl border border-gray-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export function CardHeader({ className = '', children, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export function CardTitle({ className = '', children, ...props }) {
  return (
    <h3 className={`text-lg font-semibold text-orange-300 ${className}`} {...props}>
      {children}
    </h3>
  );
}

CardTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export function CardContent({ className = '', children, ...props }) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

CardContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Card;