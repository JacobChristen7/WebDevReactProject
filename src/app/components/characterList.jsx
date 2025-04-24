'use client';

import React, { useState } from 'react';
import { useTheme } from './themeContext';
import CharacterPreview from './characterPrev.HomePage';

// Export the characters array
export const characters = [
  {
    id: 1,
    image: '/fantasyCharacter1.jpg',
    name: 'J-mak Torson',
    race: 'Human',
    className: 'Fighter',
    level: 5,
    maxHP: 45,
    currentHP: 45,
    tempHP: 0,
    alignment: 'Lawful Good',
    abilities: {
      Strength: 16,
      Dexterity: 12,
      Constitution: 14,
      Intelligence: 10,
      Wisdom: 11,
      Charisma: 13,
    },
    initiative: "+1",
    speed: "30 feet",
    armorClass: 16,
    skills: ['Athletics', 'Intimidation', 'Survival'],
    weapons: ['Longsword', 'Shield'],
    equipment: ['Chainmail Armor', 'Rations', 'Torch', 'Rope'],
    background: 'A noble warrior who fights to protect his homeland.',
    backstory: 'J-mak grew up in a small village constantly under threat from bandits. Determined to protect his people, he trained tirelessly with the village blacksmith. When the bandits attacked, J-mak led the defense, earning the respect of his peers. Now, he travels the land, seeking to bring justice to those in need.',
  },
  {
    id: 2,
    image: '/fantasyCharacterElfGirl1.png',
    name: 'Leafa Thornwood',
    race: 'Elf',
    className: 'Ranger',
    level: 6,
    maxHP: 38,
    currentHP: 38,
    tempHP: 0,
    alignment: 'Neutral Good',
    abilities: {
      Strength: 10,
      Dexterity: 18,
      Constitution: 12,
      Intelligence: 14,
      Wisdom: 16,
      Charisma: 10,
    },
    initiative: "+4",
    speed: "30 feet",
    armorClass: 15,
    skills: ['Stealth', 'Perception', 'Nature'],
    weapons: ['Longbow', 'Shortsword'],
    equipment: ['Sleeping Bag', '50 Feet of Rope', 'Quiver', 'Torch', '10 Arrows', 'Leather Armor'],
    background: 'A skilled hunter who roams the forests, protecting its creatures.',
    backstory: 'An elf who was raised by a tribe of druids in the forest. They were taught to respect nature and protect the forest from harm. One day, a group of poachers invaded the forest, and Leafa fought them off with her bow and arrows. Since then, she has dedicated her life to protecting the forest and its inhabitants.',
  },
  {
    id: 3,
    image: '/fantasyCharacterDwarf1.jpg',
    name: 'Grimli',
    race: 'Dwarf',
    className: 'Cleric',
    level: 6,
    maxHP: 50,
    currentHP: 50,
    tempHP: 0,
    alignment: 'Lawful Neutral',
    abilities: {
      Strength: 14,
      Dexterity: 10,
      Constitution: 16,
      Intelligence: 12,
      Wisdom: 18,
      Charisma: 12,
    },
    initiative: "+0",
    speed: "25 feet",
    armorClass: 18,
    skills: ['Medicine', 'History', 'Insight'],
    weapons: ['Warhammer', 'Shield'],
    equipment: ['Chainmail', 'Holy Symbol', 'Healing Kit', 'Rations'],
    background: 'A devoted cleric who serves the god of protection and healing.',
    backstory: 'Grimli was born into a clan of miners but felt a divine calling to serve his deity. After a cave-in trapped his family, Grimli prayed for guidance and miraculously found a way to save them. Since then, he has traveled the world, offering healing and protection to those in need.',
  },
  {
    id: 4,
    image: '/fantasyCharacterTiefling1.jpg',
    name: 'Nyxira Emberveil',
    race: 'Tiefling',
    className: 'Sorcerer',
    level: 7,
    maxHP: 30,
    currentHP: 30,
    tempHP: 0,
    alignment: 'Chaotic Neutral',
    abilities: {
      Strength: 8,
      Dexterity: 14,
      Constitution: 12,
      Intelligence: 10,
      Wisdom: 12,
      Charisma: 18,
    },
    initiative: "+2",
    speed: "30 feet",
    armorClass: 13,
    skills: ['Arcana', 'Deception', 'Persuasion'],
    weapons: ['Dagger'],
    equipment: ['Spellbook', 'Component Pouch', 'Cloak', 'Rations'],
    background: 'A gifted sorcerer with a mysterious past.',
    backstory: 'Nyxira discovered her magical abilities as a child when she accidentally set her home ablaze. Shunned by her village, she wandered the land, honing her powers. She now seeks to uncover the source of her magic and prove that her abilities can be used for good.',
  },
  {
    id: 5,
    image: '/fantasyCharacterHuman1.png',
    name: 'Sir Elric Dawnwatch',
    race: 'Human',
    className: 'Paladin',
    level: 5,
    maxHP: 40,
    currentHP: 40,
    tempHP: 0,
    alignment: 'Lawful Good',
    abilities: {
      Strength: 18,
      Dexterity: 10,
      Constitution: 14,
      Intelligence: 12,
      Wisdom: 12,
      Charisma: 16,
    },
    initiative: "+0",
    speed: "30 feet",
    armorClass: 18,
    skills: ['Religion', 'Persuasion', 'Athletics'],
    weapons: ['Greatsword', 'Shield'],
    equipment: ['Plate Armor', 'Holy Symbol', 'Rations', 'Torch'],
    background: 'A holy knight sworn to protect the innocent.',
    backstory: 'Elric was a squire to a renowned paladin who fell in battle against a demon. Taking up his mentor’s sword, Elric swore an oath to continue the fight against evil. He now travels the land, bringing light to the darkest corners of the world.',
  },
  {
    id: 6,
    image: '/fantasyCharacterGoblin1.png',
    name: 'Nott',
    race: 'Goblin',
    className: 'Rogue',
    level: 4,
    maxHP: 25,
    currentHP: 25,
    tempHP: 0,
    alignment: 'Chaotic Good',
    abilities: {
      Strength: 8,
      Dexterity: 18,
      Constitution: 12,
      Intelligence: 14,
      Wisdom: 10,
      Charisma: 10,
    },
    initiative: "+4",
    speed: "30 feet",
    armorClass: 14,
    skills: ['Stealth', 'Sleight of Hand', 'Acrobatics'],
    weapons: ['Dagger', 'Shortbow'],
    equipment: ['Thieves’ Tools', 'Cloak', 'Rope', 'Rations'],
    background: 'A cunning thief with a heart of gold.',
    backstory: 'Nott grew up in a goblin tribe but always felt out of place. After freeing a group of prisoners from her tribe, she fled and began a new life as a thief. Despite her criminal tendencies, Nott uses her skills to help those in need, often stealing from the rich to give to the poor.',
  },
  {
    id: 7,
    image: '/fantasyCharacterHalfling1.jpg',
    name: 'Liora Faelwen',
    race: 'Halfling',
    className: 'Bard',
    level: 4,
    maxHP: 28,
    currentHP: 28,
    tempHP: 0,
    alignment: 'Neutral Good',
    abilities: {
      Strength: 8,
      Dexterity: 14,
      Constitution: 12,
      Intelligence: 12,
      Wisdom: 10,
      Charisma: 16,
    },
    initiative: "+2",
    speed: "25 feet",
    armorClass: 13,
    skills: ['Performance', 'Persuasion', 'Insight'],
    weapons: ['Rapier', 'Lute'],
    equipment: ['Instrument', 'Traveler’s Clothes', 'Rations', 'Torch'],
    background: 'A cheerful bard who spreads joy through music.',
    backstory: 'Liora grew up in a small halfling village where music was a way of life. She left her home to share her songs with the world, bringing hope and happiness to those she meets. Her melodies have been known to inspire courage in even the most hopeless situations.',
  },
  {
    id: 8,
    image: '/fantasyCharacterHuman2.jpg',
    name: 'Thamior Quillshade',
    race: 'Human',
    className: 'Wizard',
    level: 10,
    maxHP: 60,
    currentHP: 60,
    tempHP: 0,
    alignment: 'Neutral',
    abilities: {
      Strength: 8,
      Dexterity: 12,
      Constitution: 14,
      Intelligence: 20,
      Wisdom: 14,
      Charisma: 10,
    },
    initiative: "+1",
    speed: "30 feet",
    armorClass: 12,
    skills: ['Arcana', 'History', 'Investigation'],
    weapons: ['Quarterstaff'],
    equipment: ['Spellbook', 'Component Pouch', 'Robes', 'Rations'],
    background: 'A brilliant scholar with a thirst for knowledge.',
    backstory: 'Thamior was a prodigy at the arcane academy, mastering spells far beyond his years. However, his curiosity led him to uncover forbidden knowledge, forcing him to flee. Now, he seeks to use his magic to uncover the mysteries of the world while avoiding those who hunt him.',
  },
];

export default function CharacterList() {
  const {isDarkTheme} = useTheme();

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
    <div
      className={`mt-7 p-4 rounded-lg ${
        isDarkTheme ? 'bg-gray-800 text-gray-200' : 'bg-gray-400 text-gray-800'
      }`}
    >
      <div className="flex items-center mb-4 space-x-4">
        <h2 className="text-2xl font-semibold">Your Characters</h2>
        <button
          className={`rounded-2xl border-2 p-2 ${
            isDarkTheme
              ? 'bg-red-600 hover:bg-red-700 text-white border-gray-600'
              : 'bg-red-500 hover:bg-red-600 text-white border-black'
          }`}
        >
          Create New +
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {currentCharacters.map((character) => (
          <CharacterPreview
            key={character.id}
            id={character.id}
            image={character.image}
            name={character.name}
            race={character.race}
            className={character.className}
            level={character.level}
            hp={character.maxHP}
          />
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
          className={`px-4 py-2 rounded-lg border-2 ${
            currentPage === 0
              ? isDarkTheme
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed border-gray-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed border-black'
              : isDarkTheme
              ? 'bg-red-600 hover:bg-red-700 text-white border-gray-600'
              : 'bg-red-500 hover:bg-red-600 text-white border-black'
          }`}
        >
          Previous
        </button>
        <p className="mr-7 mt-4">{`Page ${currentPage + 1}`}</p>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
          className={`px-4 py-2 rounded-lg border-2 ${
            currentPage === totalPages - 1
              ? isDarkTheme
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed border-gray-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed border-black'
              : isDarkTheme
              ? 'bg-blue-600 hover:bg-blue-700 text-white border-gray-600'
              : 'bg-blue-500 hover:bg-blue-600 text-white border-black'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}