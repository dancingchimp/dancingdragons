// src/utils/video/encryption.js

import { VIDEO_CONFIG } from './videoConfig';

export const validateAccessKey = (key) => {
  if (!key) return false;
  return VIDEO_CONFIG.validKeys.includes(key);
};

export const encryptStorageKey = (key) => {
  // Simple encryption for demo - replace with more secure method
  return btoa(key + '_' + Date.now());
};

export const decryptStorageKey = (encryptedKey) => {
  // Simple decryption for demo - replace with more secure method
  try {
    const decoded = atob(encryptedKey);
    return decoded.split('_')[0];
  } catch {
    return null;
  }
};

// Helper function to generate new access keys
export const generateAccessKey = () => {
  const randomString = Math.random().toString(36).substring(2, 15);
  return `dd_${randomString}`;
};

// Helper to validate key format
export const isValidKeyFormat = (key) => {
  return key && key.startsWith(VIDEO_CONFIG.accessKeyPrefix) && key.length >= 10;
};