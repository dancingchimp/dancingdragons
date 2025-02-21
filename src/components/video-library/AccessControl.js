// src/components/video-library/AccessControl.js
import React, { useState } from 'react';
import { validateAccessKey, encryptStorageKey } from '../../utils/video/encryption';

export function AccessControl({ onAccess }) {
  const [accessKey, setAccessKey] = useState('');
  const [error, setError] = useState('');
  const [showPayment, setShowPayment] = useState(false);

  const handleSubmit = () => {
    if (validateAccessKey(accessKey)) {
      const encryptedKey = encryptStorageKey(accessKey);
      localStorage.setItem('dd_access', encryptedKey);
      onAccess(true);
    } else {
      setError('Invalid access key');
    }
  };

  const BITCOIN_ADDRESS = "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh";
  const ETHEREUM_ADDRESS = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F";

  return (
    <div className="max-w-md mx-auto bg-gray-800/50 rounded-xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-orange-300">
        <i className="fas fa-lock mr-2"></i>
        Access Required
      </h3>
      
      {!showPayment ? (
        <div className="space-y-4">
          <div>
            <input
              type="text"
              value={accessKey}
              onChange={(e) => {
                setAccessKey(e.target.value);
                setError('');
              }}
              placeholder="Enter your access key"
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 
                     rounded-lg transition-colors"
          >
            Access Library
          </button>
          
          <div className="text-center">
            <button 
              onClick={() => setShowPayment(true)}
              className="text-orange-400 hover:text-orange-300 text-sm flex items-center gap-2 mx-auto"
            >
              <i className="fab fa-bitcoin"></i>
              Get Access Key
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <p className="text-gray-300">
            Send payment to receive instant access to the video library.
          </p>
          
          <div className="bg-gray-700 p-4 rounded-lg space-y-4">
            <div>
              <p className="text-sm text-gray-400 mb-2">Bitcoin:</p>
              <div className="flex items-center gap-2">
                <code className="text-orange-300 break-all text-sm flex-1">
                  {BITCOIN_ADDRESS}
                </code>
                <button
                  onClick={() => navigator.clipboard.writeText(BITCOIN_ADDRESS)}
                  className="text-gray-400 hover:text-white"
                  title="Copy address"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-2">Ethereum:</p>
              <div className="flex items-center gap-2">
                <code className="text-orange-300 break-all text-sm flex-1">
                  {ETHEREUM_ADDRESS}
                </code>
                <button
                  onClick={() => navigator.clipboard.writeText(ETHEREUM_ADDRESS)}
                  className="text-gray-400 hover:text-white"
                  title="Copy address"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            </div>
          </div>
          
          <button
            onClick={() => setShowPayment(false)}
            className="text-orange-400 hover:text-orange-300 text-sm flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i>
            Back to access key
          </button>
        </div>
      )}
    </div>
  );
}