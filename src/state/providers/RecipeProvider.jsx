import { useState } from "react";
import { recipeContext } from "../contexts";
import { useArray } from "../../utils/customhooks";

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({});
  const recipes = useArray();

  const addRecipeDetails = (e) => setRecipe({ ...recipe, [e.target.name]: e.target.value });

  const setRecipeCategories = (categories) => setRecipe({ ...recipe, categories });

  const setRecipeIngredients = (ingredients) => setRecipe({ ...recipe, ingredients });

  const setRecipeInstructions = (instructions) => setRecipe({ ...recipe, instructions });

  return(
    <recipeContext.Provider value={{ recipes, recipe, addRecipeDetails, setRecipeCategories, setRecipeIngredients, setRecipeInstructions }}>
      {children}
    </recipeContext.Provider>
  )
}

export default RecipeProvider;
