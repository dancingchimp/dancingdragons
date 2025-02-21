// File: src/utils/crypto.js

/**
 * Generates a temporary token for anonymous event participation
 * @returns {string} A unique token
 */
export function generateTemporaryToken() {
    // Generate random bytes
    const array = new Uint8Array(24);
    crypto.getRandomValues(array);
    
    // Convert to base64 and clean up for URL safety
    return btoa(String.fromCharCode.apply(null, array))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  }
  
  /**
   * Validates a temporary token
   * @param {string} token - The token to validate
   * @param {string} eventId - The event ID
   * @returns {boolean} Whether the token is valid
   */
  export function validateTemporaryToken(token, eventId) {
    const stored = localStorage.getItem(`event_${eventId}`);
    if (!stored) return false;
    
    try {
      const { token: storedToken, expiration } = JSON.parse(stored);
      const expired = new Date(expiration) < new Date();
      
      if (expired) {
        localStorage.removeItem(`event_${eventId}`);
        return false;
      }
      
      return token === storedToken;
    } catch (e) {
      return false;
    }
  }
  
  /**
   * Cleans up expired tokens
   */
  export function cleanupExpiredTokens() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('event_')) {
        try {
          const { expiration } = JSON.parse(localStorage.getItem(key));
          if (new Date(expiration) < new Date()) {
            localStorage.removeItem(key);
          }
        } catch (e) {
          // Invalid data, remove it
          localStorage.removeItem(key);
        }
      }
    }
  }
  
  // Run cleanup periodically
  setInterval(cleanupExpiredTokens, 1000 * 60 * 60); // Every hour