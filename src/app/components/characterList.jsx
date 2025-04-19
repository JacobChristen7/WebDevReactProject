import React from 'react';
import CharacterPreview from './characterPrev.HomePage';

export default function CharacterList() {
  const characters = [
    {
      id: 1,
      image: '/fantasyCharacter1.jpg',
      name: 'J-mak Shade',
      race: 'Human',
      className: 'Fighter',
      level: 5,
      hp: 45,
    },
    {
      id: 2,
      image: '/fantasyCharacterElfGirl1.png',
      name: 'Leafa Thornwood',
      race: 'Elf',
      className: 'Ranger',
      level: 6,
      hp: 38,
    },
    {
      id: 3,
      image: '/fantasyCharacter2.jpg',
      name: 'Grimli',
      race: 'Dwarf',
      className: 'Cleric',
      level: 6,
      hp: 50,
    },
  ];

  return (
    <div className="bg-gray-400 mt-7 p-4 rounded-lg">
      <div className="flex items-center mb-4 space-x-4">
        <h2 className="text-2xl font-semibold">Your Characters</h2>
        <button className="bg-red-500 hover:bg-red-600 text-white rounded-2xl border-2 border-black p-2">
          Create New +
        </button>
      </div>
      <ul className="space-y-4">
        {characters.map((character) => (
          <li key={character.id}>
            <CharacterPreview
              image={character.image}
              name={character.name}
              race={character.race}
              className={character.className}
              level={character.level}
              hp={character.hp}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}