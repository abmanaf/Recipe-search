// src/components/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Trigger the search with the current search term
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;

/*  const [timeOutId, setTimeoutId] = useState();

  const handleSearchInput = (e) => {
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => onSearch(e.target.value), 500);
    setTimeoutId(timeOut);
  };\*/
