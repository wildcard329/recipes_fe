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
  const { getRecipes: fetchRecipes, getRecipeByIdAuthor: fetchRecipeById, getRecipesAssets, getRecipeAsset, addRecipe: postRecipe, updateRecipe: putRecipe, deleteRecipe: removeRecipe } = useAmplify();
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

  const getRecipes = async () => {
    await setIsLoading();
    try {
      const { data } = await fetchRecipes();
      const updatedRecipes = await getRecipesAssets(data);
      setItems(updatedRecipes);
      setNotHasServerError();
    } catch (error) {
      setHasServerError();
    }
    await setIsNotLoading();
  };

  const getRecipe = async (author, id) => {
    await setIsLoading();
    try {
      const { data: recipe } = await fetchRecipeById(author, id);
      await setRecipe(recipe);
      if (recipe?.recipe_image_key) {
        const asset = await getRecipeAsset(recipe?.recipe_image_key);
        await setAsset(asset);
      };
      await setNotHasServerError();
    } catch (error) {
      await setHasServerError();
    }
    await setIsNotLoading();
  };

  const addRecipe = async (recipe) => {
    await setIsLoading();
    try {
      await postRecipe(recipe);
      await setNotHasServerError();
    } catch (error) {
      await setHasServerError();
    };
    await setIsNotLoading();
  };

  const updateRecipe = async (recipe) => {
    await setIsLoading();
    try {
      await putRecipe(recipe);
      await setNotHasServerError();
    } catch (error) {
      await setHasServerError();
    };
    await setIsNotLoading();
  }

  const deleteRecipe = async (author, id) => {
    await setIsLoading();
    try {
      await removeRecipe(author, id);
      await setNotHasServerError();
    } catch (error) {
      await setHasServerError();
    };
    await setIsNotLoading();
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
        getRecipe,
        getRecipes, 
        addRecipe,
        deleteRecipe,
        updateRecipe,
        setAsset, 
        setIsLoading,
        setIsNotLoading,
        setNewRecipe, 
        setNotNewRecipe, 
        setRecipe, 
      }}>
      {children}
    </recipeContext.Provider>
  )
}

export default RecipeProvider;
