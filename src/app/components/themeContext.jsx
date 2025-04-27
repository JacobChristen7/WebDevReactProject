'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Initialize the theme state based on localStorage or default to false
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('isDarkTheme');
      return savedTheme !== null ? JSON.parse(savedTheme) : false;
    }
    return false; // Default to light mode if window is not available
  });

  const [isThemeLoaded, setIsThemeLoaded] = useState(false); // Track if the theme is loaded

  // Ensure the body class matches the initial theme state
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    setIsThemeLoaded(true); // Mark the theme as loaded
  }, [isDarkTheme]);

  // Save the dark mode preference to localStorage whenever it changes
  useEffect(() => {
    if (isThemeLoaded) {
      localStorage.setItem('isDarkTheme', JSON.stringify(isDarkTheme));
    }
  }, [isDarkTheme, isThemeLoaded]);

  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  // Prevent rendering until the theme is loaded
  if (!isThemeLoaded) {
    return null; // Render nothing until the theme is loaded
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}