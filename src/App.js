// src/App.js
import React, { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import RecipeList from "./Components/RecipeList";
import RecipeDetails from "./Components/RecipeDetails";
import noData from "./Components/Assets/noData.png";
import "./App.css";

import axios from "axios";
import Footer from "./Components/Footer";

const API_KEY = "952c04f967531094e270f27d5a14e484";
const API_ID = "56ffbfc8";

function App({ setShow }) {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [recipeNotFound, setRecipeNotFound] = useState(false);

  useEffect(() => {
    // Initial search with a default term
    handleSearch("food");
  }, []);

  const handleSearch = async (searchTerm) => {
    if (searchTerm.trim() === "") {
      window.alert("Input required");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}&number=30`
      );

      // Extracting the hits array from the response
      const data = response.data.hits.map((hit) => hit.recipe);
      console.log(data);
      //console.log(response);
      if (data.length === 0) {
        setRecipeNotFound(true);
      } else {
        setRecipeNotFound(false);
        setRecipes(data);
        setSelectedRecipe(null);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div>
        <SearchBar onSearch={handleSearch} />
        {recipeNotFound ? (
          <div className="notFoundImage" style={{ justifyContent: "center" }}>
            <img src={noData} alt="nodata" />
            <p
              style={{
                fontSize: "16px",
                justifyContent: "center",
              }}
            >
              Recipe not found <br /> Search the correct Recipe
            </p>
          </div>
        ) : (
          <RecipeList recipes={recipes} setSelectedRecipe={setSelectedRecipe} />
        )}
        {selectedRecipe && (
          <RecipeDetails
            recipes={recipes}
            recipe={selectedRecipe}
            setSelectedRecipe={setSelectedRecipe}
            setShow={setShow}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
