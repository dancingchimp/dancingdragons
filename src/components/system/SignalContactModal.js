// src/components/system/SignalContactModal.js

import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from './Modal';

export function SignalContactModal({ isOpen, onClose }) {
  const SIGNAL_DM = "https://signal.me/#eu/--flkIBHugKFa1TKXL56Kmeaedgfnriw96sBgiKuTB1izx9pLetA-K8vts4rIN90";

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose} 
      title="Join Dancing Dragons"
      size="md"
    >
      <div className="relative space-y-6">
        {/* Close button - always visible */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-gray-400 hover:text-white p-2"
          aria-label="Close modal"
        >
          <i className="fas fa-times text-xl" />
        </button>

        <div className="bg-gray-800/50 rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-4 text-orange-300">
            <i className="fas fa-shield-alt text-2xl" />
            <h3 className="text-xl font-semibold">Secure Community Access</h3>
          </div>
          
          <p className="text-gray-300">
            To maintain our community's privacy and safety, all new members are personally vetted. Click below to start a private Signal conversation with our community lead.
          </p>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6 space-y-4">
          <h4 className="font-semibold text-orange-300">What happens next:</h4>
          <ol className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">1.</span>
              <span>You'll be connected via Signal for a brief introduction</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">2.</span>
              <span>We'll share more about our community and answer your questions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-500 mt-1">3.</span>
              <span>You'll receive private invites to relevant community groups</span>
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-4">
          <a
            href={SIGNAL_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white 
                     py-4 rounded-xl text-lg font-semibold
                     flex items-center justify-center gap-2
                     transition-all duration-300"
            onClick={() => {
              // Close modal after slight delay to ensure the link opens
              setTimeout(onClose, 100);
            }}
          >
            <i className="fas fa-message" />
            Connect on Signal
          </a>

          <button
            onClick={onClose}
            className="w-full border border-gray-700 text-gray-300 hover:text-white
                     py-4 rounded-xl text-lg font-semibold
                     transition-colors duration-300"
          >
            Return to Home
          </button>
        </div>

        <p className="text-sm text-gray-400 text-center">
          <i className="fas fa-lock mr-2" />
          Your privacy is protected through Signal's end-to-end encryption
        </p>
      </div>
    </Modal>
  );
}

SignalContactModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default SignalContactModal;