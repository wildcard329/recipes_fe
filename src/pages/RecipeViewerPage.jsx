import React, { useState, useEffect, useContext } from "react";
import { useBool, useReactRouter, useAmplify } from "../utils/customhooks";
import { recipeContext } from "../state/contexts";
import { RecipeViewer } from "../components/recipe";
import { Spinner1 } from "../components/loader";

const RecipeViewerPage = () => {
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setNotIsLoading,
  } = useBool();

  const { getRecipeByIdAuthor, getRecipeAsset } = useAmplify();
  const { locationState: { recipe_id, recipe_author } } = useReactRouter();
  const { setRecipe, setAsset } = useContext(recipeContext);

  const retrieveData = async () => {
    setIsLoading();
    const { data: recipe } = await getRecipeByIdAuthor(recipe_author, recipe_id);
    await setRecipe(recipe);
    if (recipe?.recipe_image_key) {
      const asset = await getRecipeAsset(recipe?.recipe_image_key);
      await setAsset(asset);
    }
    setNotIsLoading();
  };

  useEffect(() => {
    retrieveData();
  }, []);
  return(
    <>
      {
        isLoading ?
          <div className="space-buffer">
            <Spinner1 />
          </div>
        : 
          <RecipeViewer />
      }
    </>
  )
}

export default RecipeViewerPage;
