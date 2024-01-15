/*
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes/random";

export const getRecipes = async () => {
   try {
  const response = await fetch(
    "https://api.spoonacular.com/recipes/random?apiKey=bf011ab8b3fc4488ac759b1a306e51da&number=9"
    `${BASE_URL}?apiKey=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  return data.results; // Assuming the recipe data is in the 'results' property
  } catch (error) {
   console.error("Error fetching recipes:", error);
  throw error;
  }
};
https://api.spoonacular.com/recipes/random?apiKey=bf011ab8b3fc4488ac759b1a306e51da

*/
// src/services/recipeService.js
const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.spoonacular.com/recipes/complexSearch";

export const getRecipes = async (searchTerm) => {
  try {
    const response = await fetch(`${BASE_URL}?apiKey=${API_KEY}&number=9`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
