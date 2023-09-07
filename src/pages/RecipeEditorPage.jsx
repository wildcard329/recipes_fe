import { useContext, useEffect } from "react";
import { RecipeForm } from "../components/recipe";
import { useAmplify, useBool, useReactRouter } from "../utils/customhooks";
import { recipeContext } from "../state/contexts";
import { Spinner1 } from "../components/loader";
import { generateRecipeTemplate } from "../utils/functions/recipe";

const RecipeEditorPage = () => {
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setNotIsLoading,
  } = useBool();
  const { getRecipeByIdAuthor } = useAmplify();
  const { recipe, setRecipe, setNewRecipe, setNotNewRecipe } = useContext(recipeContext);
  const { locationState } = useReactRouter();

  const assembleRecipeDefault = async () => {
    if (!recipe?.recipe_id && !!locationState) {
      await setIsLoading();
      const { data: recData } = await getRecipeByIdAuthor(locationState?.recipe_author, locationState?.recipe_id);
      await setRecipe(recData);
      await setNotNewRecipe();
      await setNotIsLoading();
    } else {
      setRecipe(generateRecipeTemplate());
      setNewRecipe();
    };
  };

  useEffect(() => {
    assembleRecipeDefault();
  }, []);

  return(
    <div className="page-content">
      {isLoading ?
        <Spinner1 />
      : 
        <RecipeForm />}
    </div>
  )
}

export default RecipeEditorPage;
