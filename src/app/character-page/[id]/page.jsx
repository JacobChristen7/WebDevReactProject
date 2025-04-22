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

  const { name, race, className, level, hp, image } = character;

  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="p-8 bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>
          <img
            src={image}
            alt={`${name}'s avatar`}
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <p className="text-lg">Race: {race}</p>
          <p className="text-lg">Class: {className}</p>
          <p className="text-lg">Level: {level}</p>
          <p className="text-lg">HP: {hp}</p>
        </div>
      </div>
    </>
  );
}