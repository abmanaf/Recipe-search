import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import RecipeList from "./Components/RecipeList";
import RecipeDetails from "./Components/RecipeDetails"; // Corrected import

import axios from "axios";

const API_KEY = "952c04f967531094e270f27d5a14e484";
const API_ID = "56ffbfc8";

function App({ setShow }) {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    // Initial search with a default term
    handleSearch("food");
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}&number=30`
      );
      // Extracting the hits array from the response
      const data = response.data.hits.map((hit) => hit.recipe);
      console.log(data);
      setRecipes(data);
      setSelectedRecipe(null);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} setRecipes={setRecipes} />
      <RecipeList recipes={recipes} setSelectedRecipe={setSelectedRecipe} />
      {selectedRecipe && (
        <RecipeDetails
          recipes={recipes}
          recipe={selectedRecipe}
          setSelectedRecipe={setSelectedRecipe}
          setShow={setShow}
        />
      )}
      {/*
      {selectedRecipe && (
      )}
       */}
    </div>
  );
}

export default App;

/*
  const handleSearch = async (searchTerm) => {
    //const API_KEY = process.env.REACT_APP_API_KEY;
    //const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

    const response = await fetch(
      `https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}`
      //`${BASE_URL}?apiKey=bf011ab8b3fc4488ac759b1a306e51da&numer=9`
    );
    const data = await response.json();
    console.log(data);
    setRecipes(data.hits);
    setSelectedRecipe(null);
  };
  */
