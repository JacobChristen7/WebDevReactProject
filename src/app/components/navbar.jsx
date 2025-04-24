'use client';

import React from 'react';
import { useTheme } from './themeContext';

export default function Navbar() {
  const { toggleTheme, isDarkTheme } = useTheme();

  return (
    <nav className="p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">MyFantasyCharacter WIP</div>
        <div>
          <ul className="flex space-x-4 items-center">
            <li>
              <a href="/" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-300">
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="ml-4 px-4 py-2 rounded-lg border-2 border-white hover:bg-gray-700"
              >
                {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}