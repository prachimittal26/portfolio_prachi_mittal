import React from 'react';
import { Moon } from 'lucide-react';

const ThemeToggle = () => {
  return (
    <button
      className="relative p-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group"
      aria-label="Dark theme only"
    >
      <div className="relative w-6 h-6">
        <Moon 
          className="absolute inset-0 rotate-0 opacity-100 transition-all duration-500"
          size={24}
        />
      </div>
      <div className="absolute inset-0 rounded-full bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    </button>
  );
};

export default ThemeToggle;
