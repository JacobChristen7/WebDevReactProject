'use client';

import React, { useState } from 'react';
import CharacterPreview from './characterPrev.HomePage';

export default function CharacterList() {
  const characters = [
    { id: 1, image: '/fantasyCharacter1.jpg', name: 'J-mak Torson', race: 'Human', className: 'Fighter', level: 5, hp: 45 },
    { id: 2, image: '/fantasyCharacterElfGirl1.png', name: 'Leafa Thornwood', race: 'Elf', className: 'Ranger', level: 6, hp: 38 },
    { id: 3, image: '/fantasyCharacterDwarf1.jpg', name: 'Grimli', race: 'Dwarf', className: 'Cleric', level: 6, hp: 50 },
    { id: 4, image: '/fantasyCharacterTiefling1.jpg', name: 'Nyxira Emberveil', race: 'Tiefling', className: 'Sorcerer', level: 7, hp: 30 },
    { id: 5, image: '/fantasyCharacterHuman1.png', name: 'Sir Elric Dawnwatch', race: 'Human', className: 'Paladin', level: 5, hp: 40 },
    { id: 6, image: '/fantasyCharacterGoblin1.png', name: 'Nott', race: 'Goblin', className: 'Rogue', level: 4, hp: 25 },
    { id: 7, image: '/fantasyCharacterHalfling1.jpg', name: 'Liora Faelwen', race: 'Halfling', className: 'Bard', level: 4, hp: 28 },
    { id: 8, image: '/fantasyCharacterHuman2.jpg', name: 'Thamior Quillshade', race: 'Human', className: 'Wizard', level: 10, hp: 60 },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const charactersPerPage = 6;

  const startIndex = currentPage * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const currentCharacters = characters.slice(startIndex, endIndex);

  const totalPages = Math.ceil(characters.length / charactersPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-gray-400 mt-7 p-4 rounded-lg">
      <div className="flex items-center mb-4 space-x-4">
        <h2 className="text-2xl font-semibold">Your Characters</h2>
        <button className="bg-red-500 hover:bg-red-600 text-white rounded-2xl border-2 border-black p-2">
          Create New +
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {currentCharacters.map((character) => (
          <CharacterPreview
            key={character.id}
            image={character.image}
            name={character.name}
            race={character.race}
            className={character.className}
            level={character.level}
            hp={character.hp}
          />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 rounded-lg border-2 border-black ${
            currentPage === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600 text-white'
          }`}
        >
          Previous
        </button>
        <p className="mr-7 mt-4">{`page ${currentPage + 1}`}</p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 rounded-lg border-2 border-black ${
            currentPage === totalPages - 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}