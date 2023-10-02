import React, { useEffect, useContext } from "react";
import { pageNavContext } from "../state/contexts";
import { RecipeCard } from "../components/recipe";
import { Spinner1 } from "../components/loader";
import { useRecipeContext } from "../state/providers/RecipeProvider.jsx";
import { useUserContext } from "../state/providers/UserProvider.jsx";
import "./page.css";

const RecipesPage = () => {
  const { setNavLinks } = useContext(pageNavContext);

  const { getRecipes, recipes, isLoading } = useRecipeContext();
  const { checkUserAuth } = useUserContext();

  useEffect(() => {
    getRecipes();
    checkUserAuth();
    setNavLinks([]);
  }, []);

  return (
    <>
      {isLoading ?
        <div className="space-buffer">
          <Spinner1 />
        </div>
      :
        <div className="recipes-container page-content">
          <h1>Browse Recipes</h1>
          <section id="recipes-section">
            {recipes?.map((recipe, index) => <RecipeCard key={`${recipe?.recipe_id}-${recipe?.recipe_name}-${index}`} recipe={recipe} />)}
          </section>
        </div>
      }
    </>
  )
}

export default RecipesPage;
