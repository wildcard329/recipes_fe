import React, { useEffect, useContext } from "react";
import { useReactRouter } from "../utils/customhooks";
import { pageNavContext } from "../state/contexts";
import { RecipeViewer } from "../components/recipe";
import { Spinner1 } from "../components/loader";
import recipeViewerPageNav from "../assets/configs/recipeViewerNav.json";
import { useRecipeContext } from "../state/providers/RecipeProvider";

const RecipeViewerPage = () => {
  const { getRecipe, isLoading } = useRecipeContext();
  const { locationState } = useReactRouter();
  const { setNavLinks } = useContext(pageNavContext);

  useEffect(() => {
    getRecipe(locationState?.recipe_author, locationState?.recipe_id);
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
