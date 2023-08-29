import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { useBool, useReactRouter } from "../utils/customhooks";
import AppLoader from "../components/loader/AppLoader";
import { RecipeViewer } from "../components/recipe";

const RecipeViewerPage = () => {
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setNotIsLoading,
  } = useBool();

  const [recipe, setRecipe] = useState({});
  const { locationState: { recipe_id, recipe_author } } = useReactRouter();

  const getRecipe = async () => {
    setIsLoading();
    const { data: recipe } = await API.get('recipes', `/recipes/${recipe_author}/${recipe_id}`);
    await setRecipe(recipe);
    setNotIsLoading();
  };

  useEffect(() => {
    getRecipe();
  }, []);
  return(
    <>
      {
        isLoading ?
          <div className="space-buffer">
            <AppLoader />
          </div>
        : 
          <RecipeViewer recipe={recipe} />
      }
    </>
  )
}

export default RecipeViewerPage;
