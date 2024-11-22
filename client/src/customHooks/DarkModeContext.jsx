import { createContext, useState, useEffect, useContext } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({ children }) => {

  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      return storedTheme === 'dark';
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
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
