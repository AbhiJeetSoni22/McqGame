import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-indigo-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          MCQ Game
        </Link>
        <Link
          to="/"
          className="text-white hover:bg-indigo-700 px-3 py-2 rounded-md"
        >
          Home
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;