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
  const { getRecipe, setRecipe, setNewRecipe, setNotNewRecipe, isLoading } = useRecipeContext();
  const { setNavLinks } = useContext(pageNavContext);
  const { locationState, routerPath } = useReactRouter();

  const assembleRecipeDefault = async () => {
    const urlParts = routerPath.split('/');
    if (locationState?.recipe_name) {
      setRecipe(locationState);
    } else if (urlParts.length === 4 && !locationState?.recipe_name) {
      const recipeId = routerPath.split('/')[2];
      await getRecipe(recipeId);
      await setNotNewRecipe();
    } else if (urlParts.length !== 4) {
      setRecipe(generateRecipeTemplate());
      setNewRecipe();
    };
  };

  useEffect(() => {
    assembleRecipeDefault();
    setNavLinks([]);
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
