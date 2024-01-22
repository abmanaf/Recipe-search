import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function RecipeDetail({
  recipe,
  show,
  setShow,
  setSelectedRecipe,
  selectedRecipe,
}) {
  const handleSeeIngredients = (recipe) => {
    setSelectedRecipe(recipe);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedRecipe(null);
    setShow(false);
  };
  return (
    <div>
      {" "}
      <Dialog open={show} onClose={handleClose}>
        <>
          <DialogTitle id="alert-dialog-slide-title">
            Ingredients for
          </DialogTitle>
          <DialogContent className="container-fluid">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Ingredients</th>
                  <th>Quantity</th>
                  <th>Measure</th>
                  <th>Weight</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    {" "}
                    {recipe.ingredients
                      .map((ingredient) => ingredient.text)
                      .join(", ")}
                  </td>
                  <td>
                    {recipe.ingredients.map((ingredient) => ingredient.weight)}
                  </td>
                  <td>{recipe.url}</td>
                </tr>
              </tbody>
            </table>
            <DialogActions>
              <Button onClick={() => handleSeeIngredients()}>Show more</Button>
              <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>
          </DialogContent>
        </>
      </Dialog>
    </div>
  );
}

export default RecipeDetail;
