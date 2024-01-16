import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./RecipeList.css";
import RecipeDetails from "./RecipeDetails";

const RecipeList = ({ recipes, setSelectedRecipe, selectedRecipe }) => {
  const [show, setShow] = useState(false);

  const handleSeeIngredients = (recipe) => {
    setSelectedRecipe(recipe);
    setShow(true);
  };

  const handleClose = () => {
    //setSelectedRecipe(null);
    setShow(false);
  };

  return (
    <div>
      <ul className="recipe-container">
        {recipes.map((recipe) => (
          <div className="container" key={recipe.label}>
            <li className="recipe-list" key={recipe.label}>
              <p>
                <img src={recipe.image} alt="baba" />{" "}
              </p>
              <br />
              <p>{recipe.label}</p>
              <button onClick={() => handleSeeIngredients(recipe)}>
                See Ingredients
              </button>
              <button onClick={() => window.open(recipe.url)}>
                See complete recipe
              </button>
            </li>
          </div>
        ))}
      </ul>

      <RecipeDetails recipe={selectedRecipe} handleClose={handleClose} />
    </div>
  );
};

export default RecipeList;
