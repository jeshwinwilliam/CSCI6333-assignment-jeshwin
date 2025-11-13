import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
const ThemeContext = createContext(null);
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const stored = window.localStorage.getItem('app-theme');
    if (stored === 'light' || stored === 'dark') setTheme(stored);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('app-theme', theme);
  }, [theme]);
  const isDark = theme === 'dark';
  const toggle = useCallback(() => setTheme(t => t === 'dark' ? 'light' : 'dark'), []);
  const value = useMemo(() => ({ theme, isDark, toggle }), [theme, isDark, toggle]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};
