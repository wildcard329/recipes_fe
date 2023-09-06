import { useContext, useEffect, useState } from "react";
import { RecipeForm } from "../components/recipe";
import { useAmplify, useBool, useReactRouter } from "../utils/customhooks";
import { recipeContext } from "../state/contexts";
import { Spinner1 } from "../components/loader";
import { generateRandomNumber } from "../utils/functions/randomNumberGenerator";

const RecipeEditorPage = () => {
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setNotIsLoading,
  } = useBool();
  const { getRecipeByIdAuthor } = useAmplify();
  const { recipe, setRecipe, setNewRecipe, setNotNewRecipe } = useContext(recipeContext);
  const { locationState } = useReactRouter();
  const recipeTemplate = {
    recipe_id: generateRandomNumber(),
    recipe_name: "",
    recipe_description: "",
    recipe_prep_time: "",
    recipe_cook_time: "",
    recipe_total_time: "",
    recipe_author: "",
    recipe_ingredients: [],
    recipe_tools: [],
    recipe_categories: [],
    recipe_instructions: [],
  };

  const fetchRecipe = async () => {
    if (!recipe?.recipe_id && !!locationState) {
      await setIsLoading();
      const { data: recData } = await getRecipeByIdAuthor(locationState?.recipe_author, locationState?.recipe_id);
      await setRecipe(recData);
      await setNotNewRecipe();
      await setNotIsLoading();
    } else {
      setRecipe(recipeTemplate);
      setNewRecipe();
    };
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return(
    isLoading ?
      <Spinner1 />
    : 
      <RecipeForm />
  )
}

export default RecipeEditorPage;
