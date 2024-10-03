import { FaFontAwesomeFlag, FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const Header = ({ searchQuery, handleSearchChange }) => {
  return (
    <nav className="bg-blue-900 flex flex-col md:flex-row gap-2 justify-between items-center px-10 py-2 sticky top-0 left-0">
      <a
        className="text-white font-bold text-3xl flex gap-1 items-center"
        href="#"
      >
        <FaFontAwesomeFlag />
        <span>Country Info</span>
      </a>
      <div className="border px-2 py-1 text-white font-bold rounded-lg flex items-center">
        <FaSearch />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search Your Country..."
          className="bg-transparent outline-none border-none px-2"
        />
      </div>
    </nav>
  );
};

export default Header;
