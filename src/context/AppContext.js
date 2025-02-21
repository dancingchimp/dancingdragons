import React, { createContext, useContext, useState } from 'react';

console.log('AppContext initializing...'); // Debug log

// Create context
const AppContext = createContext();

// Initial state
const initialState = {
  isMenuOpen: false,
  theme: 'dark',
  loading: false
};

// Provider component
export function AppProvider({ children }) {
  console.log('AppProvider rendering...'); // Debug log
  
  const [state, setState] = useState(initialState);

  // Actions
  const toggleMenu = () => {
    setState(prev => ({
      ...prev,
      isMenuOpen: !prev.isMenuOpen
    }));
  };

  const closeMenu = () => {
    setState(prev => ({
      ...prev,
      isMenuOpen: false
    }));
  };

  const setIsMenuOpen = (isOpen) => {
    setState(prev => ({
      ...prev,
      isMenuOpen: isOpen
    }));
  };

  // Context value
  const contextValue = {
    ...state,
    toggleMenu,
    closeMenu,
    setIsMenuOpen,
    setState
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the context
export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    console.error('useAppContext must be used within an AppProvider'); // Debug log
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
