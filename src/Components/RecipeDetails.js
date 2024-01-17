// src/components/RecipeDetails.js
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeDetails = ({ recipe, setSelectedRecipe, setShow }) => {
  if (!recipe) {
    return null;
  }
  const handleClose = () => {
    setSelectedRecipe(null);
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>
        <h2>{recipe.label}</h2>
      </DialogTitle>
      <DialogContent>
        <table className="table">
          <thead>
            <tr>
              <th>Ingredients</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient) => (
                <tr key={ingredient.text}>
                  <td>{ingredient.text}</td>
                  <td>{ingredient.weight.toFixed(2)}Kg</td>
                </tr>
              ))}
          </tbody>
        </table>
        <DialogContentText>{recipe.url}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export default RecipeDetails;
