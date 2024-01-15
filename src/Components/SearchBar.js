// src/components/SearchBar.js
import React, { useState } from "react";

const SearchBar = ({ onSearch, setRecipes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [timeOutId, setTimeoutId] = useState();

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  /*
  const handleSearchInput = (e) => {
    clearTimeout(timeOutId);
    const timeOut = setTimeout(() => onSearch(e.target.value), 500);
    setTimeoutId(timeOut);
  };\*/

  return (
    <div>
      <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
