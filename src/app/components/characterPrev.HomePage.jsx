import React from 'react';
import PropTypes from 'prop-types';

const CharacterPreview = ({ image, name, race, className, level, hp }) => {
  return (
    <div className="flex items-center border border-gray-300 p-4 rounded-lg bg-gray-100 shadow-sm">
      <img
        src={image}
        alt={`${name}'s avatar`}
        className="w-24 h-24 rounded-full mr-4 object-cover"
      />
      <div className="text-gray-800">
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm">Race: {race}</p>
        <p className="text-sm">Class: {className}</p>
        <p className="text-sm">Level: {level}</p>
        <p className="text-sm">HP: {hp}</p>
      </div>
    </div>
  );
};

CharacterPreview.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  race: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  hp: PropTypes.number.isRequired,
};

export default CharacterPreview;