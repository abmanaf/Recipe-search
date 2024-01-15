// src/components/RecipeList.js
import React from "react";
import "./RecipeList.css";
//import { SplideSlide, Splide } from "@splidejs/react-splide";
//import "@splidejs/splide/dist/css/splide.min.css,";
//import "@splidejs/splide/dist/css/splide.min.css";

const RecipeList = ({ recipes }) => {
  if (!recipes) {
    return <p>No recipes available.</p>; // or any other message or component
  }

  return (
    <div>
      <ul className="recipe-container">
        {/*}
        <Splide
          options={{
            perPage: 4,
            pagination: false,
            drag: "free",
          }}
        >
        */}
        {recipes.map((recipe) => (
          <div key={recipe.id} className="container">
            <li className="recipe-list">
              <p>
                <img src={recipe.image} alt="baba" />{" "}
              </p>
              <br />
              <p>{recipe.label}</p>
            </li>
          </div>
        ))}
        {/* 
                      <SplideSlide>

          </SplideSlide>
        </Splide>
        */}
      </ul>
    </div>
  );
};

export default RecipeList;
