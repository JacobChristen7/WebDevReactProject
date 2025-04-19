import Navbar from "./components/navbar";
import CharacterList from "./components/characterList";

export default function Home() {
  return (
    <>
      <Navbar />
        <div className="flex flex-col items-center bg-gray-300 py-7 mx-50">
          <h1 className="text-4xl">Welcome to the home page!</h1>
          <CharacterList />
        </div>
    </>
  );
}
