// File: src/hooks/useUtils.js

import { useState, useEffect, useCallback, useRef } from 'react';

/**
 * Hook to track window scroll position
 * @returns {number} Current scroll position
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollPosition(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
}

/**
 * Hook to track window dimensions
 * @returns {Object} Window dimensions {width, height}
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeoutId = null;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return windowSize;
}

/**
 * Hook to detect clicks outside of a specified element
 * @param {React.RefObject} ref Reference to the element to monitor
 * @param {Function} handler Callback function when click is outside
 */
export function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

/**
 * Hook to check if a media query matches
 * @param {string} query Media query string
 * @returns {boolean} True if query matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatch = (e) => setMatches(e.matches);
    
    mediaQuery.addListener(updateMatch);
    return () => mediaQuery.removeListener(updateMatch);
  }, [query]);

  return matches;
}

/**
 * Hook to manage local storage state
 * @param {string} key Storage key
 * @param {any} initialValue Initial value
 * @returns {[any, Function]} State and setter
 */
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

/**
 * Hook to manage session storage state
 * @param {string} key Storage key
 * @param {any} initialValue Initial value
 * @returns {[any, Function]} State and setter
 */
export function useSessionStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

/**
 * Hook to debounce a callback
 * @param {Function} callback Function to debounce
 * @param {number} delay Delay in milliseconds
 * @returns {Function} Debounced callback
 */
export function useDebounce(callback, delay) {
  const timeoutRef = useRef();

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return useCallback((...args) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
}

/**
 * Hook to detect if component is mounted
 * @returns {boolean} True if component is mounted
 */
export function useMounted() {
  const mountedRef = useRef(false);
  const isMounted = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    isMounted.current = true;

    return () => {
      mountedRef.current = false;
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => mountedRef.current, []);
}

/**
 * Hook to manage async loading state
 * @returns {Object} Loading state and handlers
 */
export function useLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setError(null);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const setLoadingError = useCallback((error) => {
    setIsLoading(false);
    setError(error);
  }, []);

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setLoadingError
  };
}

/**
 * Hook to handle keyboard shortcuts
 * @param {Object} keyMap Map of key combinations to handlers
 */
export function useKeyboardShortcuts(keyMap) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, ctrlKey, shiftKey, altKey, metaKey } = event;
      
      for (const [shortcut, handler] of Object.entries(keyMap)) {
        const keys = shortcut.toLowerCase().split('+');
        const modifiers = {
          ctrl: keys.includes('ctrl'),
          shift: keys.includes('shift'),
          alt: keys.includes('alt'),
          meta: keys.includes('meta')
        };
        
        const mainKey = keys.find(k => !['ctrl', 'shift', 'alt', 'meta'].includes(k));
        
        if (key.toLowerCase() === mainKey &&
            ctrlKey === modifiers.ctrl &&
            shiftKey === modifiers.shift &&
            altKey === modifiers.alt &&
            metaKey === modifiers.meta) {
          event.preventDefault();
          handler(event);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyMap]);
}