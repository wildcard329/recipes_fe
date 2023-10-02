import { useContext, useEffect } from "react";
import { RecipeForm } from "../components/recipe";
import { useReactRouter } from "../utils/customhooks";
import { pageNavContext } from "../state/contexts";
import { Spinner1 } from "../components/loader";
import { generateRecipeTemplate } from "../utils/functions/recipe";
import recipeViewerPageNav from "../assets/configs/recipeViewerNav.json";
import { AccordionProvider } from "../state/providers";
import { useRecipeContext } from "../state/providers/RecipeProvider";

const RecipeEditorPage = () => {
  const { getRecipe, recipe, setRecipe, setNewRecipe, setNotNewRecipe, isLoading } = useRecipeContext();
  const { setNavLinks } = useContext(pageNavContext);
  const { locationState, routerPath } = useReactRouter();

  const assembleRecipeDefault = async () => {
    if (!!locationState?.recipe_id && !recipe?.recipe_id) {
      await getRecipe(locationState?.recipe_author, locationState?.recipe_id);
      await setNotNewRecipe();
    } else if (!locationState?.recipe_id) {
      setRecipe(generateRecipeTemplate());
      setNewRecipe();
    };
  };

  useEffect(() => {
    assembleRecipeDefault();
    setNavLinks(recipeViewerPageNav);
  }, [routerPath]);

  return(
    <div className="page-content recipe-page">
      {isLoading ?
        <Spinner1 />
      : 
        <AccordionProvider numDrawers={5}>
          <RecipeForm />  
        </AccordionProvider>}
    </div>
  )
}

export default RecipeEditorPage;
