import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
        <div className="flex flex-col items-center mt-7">
          <h1 className="text-6xl">Hello!</h1>
          <h2 className="text-4xl">Welcome to the home page!</h2>
        </div>
    </>
  );
}
