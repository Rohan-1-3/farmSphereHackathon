import { createContext, useState, useEffect, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {
  // Get user preference from localStorage or system's preference
  const getInitialTheme = () => {
    // First check localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }

    // If no preference in localStorage, check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    // Apply the theme
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
