import { useState } from "react";
import { recipeContext } from "../contexts";
import { useBool } from "../../utils/customhooks";

const RecipeProvider = ({ children }) => {
  const [recipe, setRecipe] = useState({});
  const [recipeStep, setRecipeStep] = useState(1);
  const [asset, setAsset] = useState(null);
  const {
    isTruthy: isNewRecipe,
    setTruthy: setNewRecipe,
    setNotTruthy: setNotNewRecipe,
  } = useBool();
  const goToNextRecipeStep = () => setRecipeStep((current) => current + 1);
  const goToRecipeStep = (step) => setRecipeStep(step);

  return(
    <recipeContext.Provider value={{ recipe, asset, isNewRecipe, recipeStep, setRecipe, setAsset, setNewRecipe, setNotNewRecipe, goToNextRecipeStep, goToRecipeStep }}>
      {children}
    </recipeContext.Provider>
  )
}

export default RecipeProvider;
