// src/components/RecipeDetails.js
import React from "react";

const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.label}</h2>
      <p>
        Ingredients:{" "}
        {recipe.ingredients.map((ingredient) => ingredient.text).join(", ")}
      </p>
      <p>Instructions: {recipe.url}</p>
    </div>
  );
};

export default RecipeDetails;
