// src/components/SearchBar.js
import React, { useState } from "react";
import "./SearchBar.css";
import search from "./Assets/search.png";
import "font-awesome/css/font-awesome.min.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Trigger the search with the current search term
    onSearch(searchTerm);
  };

  return (
    <div>
      <div class="topnav">
        <li class="active" href="#home">
          recipe.Search
        </li>
        <div class="search-container">
          <input
            type="text"
            value={searchTerm}
            placeholder="Search.."
            name="search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-image" onClick={handleSearch}>
            <i class="fa fa-search"></i>
            {/*
              <img src={search} alt="search image" width={20} />
               */}
          </button>
        </div>
      </div>
      {/*
      <input
        type="text"
        value={searchTerm}
        required
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
       */}
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
