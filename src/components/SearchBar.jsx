import { useState } from "react";
import PropTypes from "prop-types";
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch(query); // Call the parent function with the query
    }
  };

  return (
    <div className="w-full flex justify-center items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown} // Detect Enter key
        placeholder="Search for songs..."
        className="border p-2  rounded w-1/2"
      />
    </div>
  );
};

//define the props

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // ensure that the prop is a function
};

//export the component

export default SearchBar;
