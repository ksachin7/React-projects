import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a context for Dark Mode
const DarkModeContext = createContext();

// Custom hook to use the Dark Mode context
export const useDarkMode = () => useContext(DarkModeContext);

// Dark Mode provider component
export const DarkModeProvider = ({ children }) => {
  // State to track whether dark mode is enabled or not
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedDarkMode === 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode ? 'true' : 'false');
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add('dark-mode');
      html.classList.remove('light-mode');
    } else {
      html.classList.remove('dark-mode');
      html.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Value for the context provider
  const value = {
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  );
};