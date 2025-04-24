'use client';

import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";
import { useTheme } from "./components/themeContext"; // Import the useTheme hook

export default function Home() {
  const { isDarkTheme } = useTheme(); // Access the isDarkTheme state

  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col items-center py-7 mx-50 ${
          isDarkTheme ? 'bg-gray-900 text-gray-200' : 'bg-gray-300 text-gray-800'
        }`}
      >
        <h1 className="text-4xl">Welcome to the home page!</h1>
        <CharacterList />
      </div>
    </>
  );
}
