import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <form action="#">
      <div className="w-full border px-2 py-1 text-green-300 font-bold rounded-lg flex items-center">
        <FaSearch />
        <input
          type="text"
          placeholder="Search Your Country..."
          className="bg-transparent outline-none border-none px-2"
        />
      </div>
    </form>
  );
};

export default Search;
