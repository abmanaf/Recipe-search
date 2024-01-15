// src/components/RecipeList.js
import React from "react";
import { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import "./RecipeList.css";

const RecipeList = ({ recipes }) => {
  const [show, setShow] = useState(false);

  if (!recipes) {
    return <p>No recipes available.</p>; // or any other message or component
  }

  return (
    <div>
      <ul className="recipe-container">
        <Dialog open={show}>
          <DialogTitle id="alert-dialog-slide-title">Ingredients</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {" "}
              I am going to school
            </DialogContentText>
          </DialogContent>
        </Dialog>

        {recipes.map((recipe) => (
          <div className="container" key={recipe.id}>
            <li className="recipe-list" key={recipe.id}>
              <p>
                <img src={recipe.image} alt="baba" />{" "}
              </p>
              <br />
              <p>{recipe.label}</p>
              <button onClick={(e) => setShow(true)}>See Ingredients</button>
              <button onClick={(e) => window.open(recipe.url)}>
                See complete recipe
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
