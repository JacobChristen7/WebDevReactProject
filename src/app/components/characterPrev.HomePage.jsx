import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useTheme } from './themeContext'; // Import the useTheme hook

const CharacterPreview = ({ id, image, name, race, className, level, maxHP }) => {
  const { isDarkTheme } = useTheme(); // Access the isDarkTheme state

  // Create a slugified version of the name
  const slug = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/character-page/${id}-${slug}`}>
      <div
        className={`flex items-center border p-4 rounded-lg shadow-sm cursor-pointer hover:shadow-md ${
          isDarkTheme ? 'bg-gray-800 border-gray-600' : 'bg-gray-100 border-gray-300'
        }`}
      >
        <img
          src={image}
          alt={`${name}'s avatar`}
          className="w-24 h-24 rounded-full mr-4 object-cover"
        />
        <div className={isDarkTheme ? 'text-gray-200' : 'text-gray-800'}>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm">Race: {race}</p>
          <p className="text-sm">Class: {className}</p>
          <p className="text-sm">Level: {level}</p>
          <p className="text-sm">HP: {maxHP}</p>
        </div>
      </div>
    </Link>
  );
};

CharacterPreview.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  maxHP: PropTypes.number.isRequired,
};

export default CharacterPreview;