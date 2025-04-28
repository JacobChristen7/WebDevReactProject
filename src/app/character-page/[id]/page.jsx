'use client';

import { useState, useEffect } from 'react';
import { characters } from '../../components/characterList';
import Navbar from '../../components/navbar';
import { useTheme } from '../../components/themeContext'; // Import the useTheme hook

export default function CharacterPage({ params }) {
  const { isDarkTheme } = useTheme(); // Access the isDarkTheme state

  // Extract the ID from the URL (e.g., "1-j-mak-torson" -> "1")
  const id = params.id.split('-')[0];

  // Find the character by ID
  const character = characters.find((char) => char.id === parseInt(id));

  if (!character) {
    return <div>Character not found</div>;
  }

  const {
    name,
    race,
    className,
    level,
    maxHP,
    currentHP,
    tempHP,
    image,
    abilities,
    skills,
    initiative,
    speed,
    armorClass,
    weapons,
    equipment,
    background,
    alignment,
    backstory,
  } = character;

  // Initialize currency state from localStorage or default values
  const [currency, setCurrency] = useState(() => {
    const savedCurrency = localStorage.getItem(`currency-${id}`);
    return savedCurrency
      ? JSON.parse(savedCurrency)
      : { copper: 0, silver: 0, gold: 0 };
  });

  // Save currency to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(`currency-${id}`, JSON.stringify(currency));
  }, [currency, id]);

  // State to manage input values for each currency type
  const [currencyInputs, setCurrencyInputs] = useState({ copper: '', silver: '', gold: '' });

  // Handlers for adding and subtracting currency
  const handleAddCurrency = (type, amount) => {
    setCurrency((prev) => ({
      ...prev,
      [type]: prev[type] + amount,
    }));
  };

  const handleSubtractCurrency = (type, amount) => {
    setCurrency((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] - amount), // Prevent negative values
    }));
  };

  // Handle input changes
  const handleInputChange = (type, value) => {
    setCurrencyInputs((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  // Reset input field after adding or subtracting
  const resetInputField = (type) => {
    setCurrencyInputs((prev) => ({
      ...prev,
      [type]: '',
    }));
  };

  return (
    <>
      <Navbar />
      <div
        className={`flex justify-center p-8 ${
          isDarkTheme ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-800'
        }`}
      >
        <div
          className={`w-full min-w-4xl max-w-4xl shadow-lg rounded-lg p-6 ${
            isDarkTheme ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
          }`}
        >
          {/* Character Header */}
          <div className="flex items-center mb-6">
            <img
              src={image}
              alt={`${name}'s avatar`}
              className="w-64 h-64 rounded-2xl object-cover mr-6"
            />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="text-lg mt-3">Race: {race}</p>
              <p className="text-lg">Class: {className}</p>
              <p className="text-lg">Level {level}</p>
              <p className="text-lg">Alignment: {alignment}</p>
            </div>
          </div>

          {/* Character Abilities and Stats */}
          <div className="grid grid-cols-2 gap-6 mb-6 border-t pt-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Abilities</h2>
              <ul className="list-disc list-inside">
                {Object.entries(abilities).map(([key, value]) => (
                  <li key={key} className="text-lg">
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Hit Points / Stats</h2>
              <p className="text-lg">Max Hit Points: {maxHP}</p>
              <p className="text-lg">Current Hit Points: {currentHP}</p>
              <p className="text-lg">Temporary Hit Points: {tempHP}</p>
              <p className="text-lg">Initiative: {initiative}</p>
              <p className="text-lg">Speed: {speed}</p>
              <p className="text-lg">Armor Class: {armorClass}</p>
            </div>
          </div>

          {/* Weapons and Skills */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Weapons</h2>
              <ul className="list-inside">
                {weapons.map((item, index) => (
                  <li key={index} className="text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Skills</h2>
              <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                  <li key={index} className="text-lg">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Equipment and Currency */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Equipment</h2>
              <ul className="list-inside">
                {equipment.map((item, index) => (
                  <li key={index} className="text-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Currency</h2>
              <div className="flex flex-col gap-4">
                {['copper', 'silver', 'gold'].map((type) => (
                  <div key={type} className="flex flex-col">
                    <h3 className="text-lg font-medium capitalize">{type} Coins</h3>
                    <p className="text-sm mb-1">{currency[type]}</p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => {
                          const amount = parseInt(currencyInputs[type]) || 1; // Default to 1 if input is empty
                          handleSubtractCurrency(type, amount);
                          resetInputField(type); // Clear the input field
                        }}
                        className="px-2 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        min="0"
                        value={currencyInputs[type]} // Bind input value to state
                        onChange={(e) => handleInputChange(type, e.target.value)} // Update state on input change
                        className="w-16 p-1 border rounded-md text-center text-sm"
                      />
                      <button
                        onClick={() => {
                          const amount = parseInt(currencyInputs[type]) || 1; // Default to 1 if input is empty
                          handleAddCurrency(type, amount);
                          resetInputField(type); // Clear the input field
                        }}
                        className="px-2 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Background and Additional Info */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Background</h2>
              <p className="text-lg">{background}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-2">Other Details</h2>
              <p className="text-lg">Add any additional details here!</p>
            </div>
          </div>

          {/* Backstory */}
          <div className="flex-col justify-items-center mt-6 border-t pt-6">
            <h2 className="text-2xl font-semibold mb-2">Backstory</h2>
            <p className="text-lg">{backstory}</p>
          </div>
        </div>
      </div>
    </>
  );
}