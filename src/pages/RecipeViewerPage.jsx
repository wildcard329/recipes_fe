import React, { useEffect, useContext } from "react";
import { useBool, useReactRouter, useAmplify } from "../utils/customhooks";
import { recipeContext } from "../state/contexts";
import { RecipeViewer } from "../components/recipe";
import { Spinner1 } from "../components/loader";
import { RouterLink } from "../components/router";
import { AppButton } from "../components/button";

const RecipeViewerPage = () => {
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setNotIsLoading,
  } = useBool();

  const { getRecipeByIdAuthor, getRecipeAsset, deleteRecipe } = useAmplify();
  const { locationState: { recipe_id, recipe_author } } = useReactRouter();
  const { setRecipe, setAsset, recipe } = useContext(recipeContext);

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

  const removeRecipe = () => {
    deleteRecipe(recipe_author, recipe_id);
  };

  useEffect(() => {
    retrieveData();
  }, []);
  return(
    <div className="page-content">
      {
        isLoading ?
          <div className="space-buffer">
            <Spinner1 />
          </div>
        : 
          <>
            <RecipeViewer />
            <div id="page-action-row" className="recipe-viewer-section">
              <RouterLink label={"edit"} path={`/recipes/${recipe_id}/edit`} state={recipe} />
              <AppButton btnCb={removeRecipe} btnLabel={"delete"} />
            </div>
          </>
      }
    </div>
  )
}

export default RecipeViewerPage;
