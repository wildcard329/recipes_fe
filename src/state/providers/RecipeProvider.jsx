import { useState } from "react";
import { recipeContext } from "../contexts";
import { useArray } from "../../utils/customhooks";

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({});
  const recipes = useArray();

  return(
    <recipeContext.Provider value={{ recipes, recipe, setRecipe }}>
      {children}
    </recipeContext.Provider>
  )
}

export default RecipeProvider;
