// src/components/RecipeList.js
import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./RecipeList.css";

const RecipeList = ({ recipes, selectedRecipe }) => {
  const [show, setShow] = useState(false);

  if (!recipes || !Array.isArray(recipes)) {
    return <p>No recipes available.</p>; // or any other message or component
  }

  return (
    <div>
      <ul className="recipe-container">
        <Dialog open={show}>
          {selectedRecipe && (
            <>
              <DialogTitle id="alert-dialog-slide-title">
                Ingredients for {selectedRecipe.label}
              </DialogTitle>
              <DialogContent className="container-fluid">
                <table className="table table-bordered">
                  <thead>
                    <tr key={selectedRecipe.id}>
                      <th>Ingredients</th>
                      <th>Weight</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedRecipe.ingredients.map((ingredient) => (
                      <tr key={ingredient.text}>
                        <td>{ingredient.text}</td>
                        <td>{ingredient.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <DialogActions>
                  <Button onClick={() => window.open(selectedRecipe.url)}>
                    Show more
                  </Button>
                  <Button onClick={() => setShow(false)}>Cancel</Button>
                </DialogActions>
                <DialogContentText id="alert-dialog-slide-description">
                  {" "}
                  I am going to school
                </DialogContentText>
              </DialogContent>
            </>
          )}
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
