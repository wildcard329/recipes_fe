import { useState } from "react";
import { recipeContext } from "../contexts";

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({});

  return(
    <recipeContext.Provider value={{ recipe, setRecipe }}>
      {children}
    </recipeContext.Provider>
  )
}

export default RecipeProvider;
