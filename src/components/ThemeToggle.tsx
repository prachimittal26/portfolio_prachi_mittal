import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-blue-600 dark:to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 transform transition-all duration-500 ${
            theme === 'light' ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
          }`}
          size={24}
        />
        <Moon 
          className={`absolute inset-0 transform transition-all duration-500 ${
            theme === 'dark' ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
          }`}
          size={24}
        />
      </div>
      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    </button>
  );
};

export default ThemeToggle;