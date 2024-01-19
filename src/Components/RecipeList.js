import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RecipeList.css";
import RecipeDetails from "./RecipeDetails";

const RecipeList = ({ recipes, setSelectedRecipe, selectedRecipe }) => {
  const [show, setShow] = useState(false);

  const handleSeeIngredients = (recipe) => {
    setSelectedRecipe(recipe);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <div
        id="recipeCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://cdn.dribbble.com/users/3535286/screenshots/7160272/media/de772e2ccc0add2666bc83022562f108.jpg?resize=400x300&vertical=center"
              alt="First Slide"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.dribbble.com/users/2524187/screenshots/18826796/media/b24e866e0ef68e1a78f83ad46fc10a50.jpg?resize=1000x750&vertical=center"
              alt="Second Slide"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.dribbble.com/users/4263119/screenshots/16111300/media/dfbb6fb6785692c7c79086f8e1f22ec7.jpg?resize=1000x750&vertical=center"
              alt="Third Slide"
              className="d-block w-100"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.dribbble.com/users/8434154/screenshots/15976720/media/877ba1471b408d596e68550af2a684aa.png?resize=1000x750&vertical=center"
              alt="Third Slide"
              className="d-block w-100"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#recipeCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#recipeCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <ul className="recipe-container">
        {recipes.map((recipe) => (
          <div className="container" key={recipe.label}>
            <li className="recipe-list" key={recipe.label}>
              <p className="image-paragraph">
                <img
                  className="recipe-image"
                  src={recipe.image}
                  alt={recipe.label}
                />
              </p>
              <br />
              <p style={{ justifyContent: "center" }}>{recipe.label}</p>
              <div className="view-recipes">
                <button
                  className="btn btn-outline-warning my-3"
                  onClick={() => handleSeeIngredients(recipe)}
                >
                  View Ingredients
                </button>
                <button
                  className="btn btn-outline-warning"
                  onClick={() => window.open(recipe.url)}
                >
                  View Complete Recipe
                </button>
              </div>
            </li>
          </div>
        ))}
      </ul>
      <RecipeDetails recipe={selectedRecipe} handleClose={handleClose} />
    </div>
  );
};

export default RecipeList;
