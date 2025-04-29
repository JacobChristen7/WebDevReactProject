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
        style={{
          backgroundImage: `url('/old-paper-background.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: 'calc(100vh - 76px)', // Adjust height to account for the Navbar height
          overflow: 'hidden', // Prevent scrolling
          position: 'relative', // Ensure the overlay is positioned correctly
        }}
        className="w-full"
      >
        {/* Transparent Black Overlay */}
        {isDarkTheme && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
              zIndex: 1, // Ensure it appears above the background
            }}
          ></div>
        )}

        {/* Content */}
        <div
          style={{
            position: 'relative', // Ensure content is above the overlay
            zIndex: 2,
          }}
          className={`flex flex-col items-center py-7 ${
            isDarkTheme ? 'text-gray-200' : 'text-gray-800'
          }`}
        >
          <h1 className="text-4xl">Welcome to the home page!</h1>
          <CharacterList />
        </div>
      </div>
    </>
  );
}
