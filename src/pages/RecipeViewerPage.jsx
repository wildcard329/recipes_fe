import React, { useEffect, useContext } from "react";
import { MdOutlineEdit } from 'react-icons/md'
import { TiDeleteOutline } from 'react-icons/ti';
import { useBool, useReactRouter, useAmplify } from "../utils/customhooks";
import { pageNavContext, recipeContext } from "../state/contexts";
import { RecipeViewer } from "../components/recipe";
import { Spinner1 } from "../components/loader";
import { RouterLink } from "../components/router";
import { AppButton } from "../components/button";
import recipeViewerPageNav from "../assets/configs/recipeViewerNav.json";

const RecipeViewerPage = () => {
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setNotIsLoading,
  } = useBool();

  const { getRecipeByIdAuthor, getRecipeAsset, deleteRecipe } = useAmplify();
  const { locationState } = useReactRouter();
  const { setRecipe, setAsset, recipe } = useContext(recipeContext);
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

  const removeRecipe = () => {
    deleteRecipe(locationState?.recipe_author, locationState?.recipe_id);
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
