import { useContext, useState } from "react";
import { recipeContext } from "../contexts";
import { useAmplify, useArray, useBool } from "../../utils/customhooks";

export const useRecipeContext = () => {
  const context = useContext(recipeContext);
  if (!context) {
    throw new Error('useRecipeContext must be used within a RecipeProvider!');
  };
  return context;
};

const RecipeProvider = ({ children }) => {
  const { arr: recipes, setItems } = useArray();
  const [recipe, setRecipe] = useState({});
  const [asset, setAsset] = useState(null);
  const { getRecipes: fetchRecipes, getRecipeByIdAuthor: fetchRecipeById, getRecipesAssets, getRecipeAsset } = useAmplify();
  const {
    isTruthy: isNewRecipe,
    setTruthy: setNewRecipe,
    setNotTruthy: setNotNewRecipe,
  } = useBool();
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setIsNotLoading,
  } = useBool();
  const {
    isTruthy: hasServerError,
    setTruthy: setHasServerError,
    setNotTruthy: setNotHasServerError,
  } = useBool();

  const setRecipes = async () => {
    try {
      await setIsLoading();
      const { data } = await fetchRecipes();
      const updatedRecipes = await getRecipesAssets(data);
      setItems(updatedRecipes);
      await setIsNotLoading();
      setNotHasServerError();
    } catch (error) {
      setHasServerError();
    };
  };

  return(
    <recipeContext.Provider 
      value={{ 
        asset, 
        hasServerError, 
        isLoading,
        isNewRecipe, 
        recipe, 
        recipes, 
        setAsset, 
        setIsLoading,
        setIsNotLoading,
        setNewRecipe, 
        setNotNewRecipe, 
        setRecipe, 
        setRecipes, 
      }}>
      {children}
    </recipeContext.Provider>
  )
}

export default RecipeProvider;
