import React, { useEffect, useContext } from "react";
import { useBool, useReactRouter, useAmplify } from "../utils/customhooks";
import { pageNavContext, recipeContext } from "../state/contexts";
import { RecipeViewer } from "../components/recipe";
import { Spinner1 } from "../components/loader";
import recipeViewerPageNav from "../assets/configs/recipeViewerNav.json";

const RecipeViewerPage = () => {
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setNotIsLoading,
  } = useBool();

  const { getRecipeByIdAuthor, getRecipeAsset } = useAmplify();
  const { locationState } = useReactRouter();
  const { setRecipe, setAsset } = useContext(recipeContext);
  const { setNavLinks } = useContext(pageNavContext);

  const retrieveData = async () => {
    setIsLoading();
    const { data: recipe } = await getRecipeByIdAuthor(locationState?.recipe_author, locationState?.recipe_id);
    await setRecipe(recipe);
    if (recipe?.recipe_image_key) {
      const asset = await getRecipeAsset(recipe?.recipe_image_key);
      await setAsset(asset);
    }
    setNotIsLoading();
  };

  useEffect(() => {
    retrieveData();
    setNavLinks(recipeViewerPageNav);
  }, []);
  return(
    <div className="page-content recipe-page">
      {
        isLoading ?
          <div className="space-buffer">
            <Spinner1 />
          </div>
        : 
          <>
            <RecipeViewer />
          </>
      }
    </div>
  )
}

export default RecipeViewerPage;
