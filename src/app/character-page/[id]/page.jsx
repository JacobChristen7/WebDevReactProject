'use client';

import { characters } from '../../components/characterList';
import Navbar from '../../components/navbar';

export default function CharacterPage({ params }) {
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

  return (
    <>
      <Navbar />
      <div className="flex justify-center p-8 bg-gray-100">
        <div className="w-full min-w-4xl max-w-4xl bg-white shadow-lg rounded-lg p-6">
          {/* Character Header */}
          <div className="flex items-center mb-6">
            <img
              src={image}
              alt={`${name}'s avatar`}
              className="w-64 h-64 rounded-2xl object-cover mr-6"
            />
            <div>
              <h1 className="text-5xl font-bold">{name}</h1>
              <p className="text-lg text-gray-600 mt-3">Race: {race}</p>
              <p className="text-lg text-gray-600">Class: {className}</p>
              <p className="text-lg text-gray-600">Level {level}</p>
              <p className="text-lg text-gray-600">Alignment: {alignment}</p>
            </div>
          </div>

          {/* Character Abilities and Stats */}
          <div className="grid grid-cols-2 gap-6 mb-6 border-t border-gray-300 pt-6">
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
              <div className="flex-col justify-items-center mt-6 border-t border-gray-300 pt-6">
                <h2 className="text-2xl font-semibold mb-2">Backstory</h2>
                <p className="text-lg">{backstory}</p>
              </div>
        </div>
      </div>
    </>
  );
}