import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <Link to="/">
          <h1 className="font-bold text-lg">MiniLib</h1>
        </Link>
        <div className="space-x-4">
          <Link to="/books">All Books</Link>
          <Link to="/create-book">Add Book</Link>
          <Link to="/borrow-summary">Borrow Summary</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
