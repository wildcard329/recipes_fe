import { useState } from "react";
import { recipeContext } from "../contexts";
import { useBool } from "../../utils/customhooks";

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({});
  const [asset, setAsset] = useState(null);
  const {
    isTruthy: isNewRecipe,
    setTruthy: setNewRecipe,
    setNotTruthy: setNotNewRecipe,
  } = useBool();

  return(
    <recipeContext.Provider value={{ recipe, asset, isNewRecipe, setRecipe, setAsset, setNewRecipe, setNotNewRecipe }}>
      {children}
    </recipeContext.Provider>
  )
}

export default RecipeProvider;
