import React, { useState, useEffect } from "react";
import { API, Storage } from "aws-amplify";
import { useBool, useReactRouter } from "../utils/customhooks";
import { RecipeViewer } from "../components/recipe";
import { Spinner1 } from "../components/loader";

const RecipeViewerPage = () => {
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setNotIsLoading,
  } = useBool();

  const [recipe, setRecipe] = useState({});
  const [recAsset, setRecAsset] = useState(null);
  const { locationState: { recipe_id, recipe_author } } = useReactRouter();

  const getRecipe = async () => {
    setIsLoading();
    const { data: recipe } = await API.get('recipes', `/recipes/${recipe_author}/${recipe_id}`);
    await setRecipe(recipe);
    if (recipe?.recipe_image_key) {
      const asset = await Storage.get(recipe?.recipe_image_key);
      await setRecAsset(asset);
    }
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
            <Spinner1 />
          </div>
        : 
          <RecipeViewer recipe={recipe} recipeImage={recAsset} />
      }
    </>
  )
}

export default RecipeViewerPage;
