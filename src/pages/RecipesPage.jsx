import React, { useEffect, useState, useContext } from "react";
import { useAmplify } from "../utils/customhooks/";
import { useBool } from "../utils/customhooks";
import { pageNavContext, userContext } from "../state/contexts";
import { RecipeCard } from "../components/recipe";
import { Spinner1 } from "../components/loader";
import "./page.css";

const RecipesPage = () => {
  const { setNavLinks } = useContext(pageNavContext);
  const { loginUser } = useContext(userContext);
  
  const { getRecipes, getRecipesAssets, getGoogleAuthUser } = useAmplify();
  const [recipes, setRecipes] = useState([]);
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setIsNotLoading,
  } = useBool();

  const retrieveData = async () => {
    await setIsLoading();
    const { data } = await getRecipes();
    const updatedRecipes = await getRecipesAssets(data);
    setRecipes(updatedRecipes);
    try {
      const user = await getGoogleAuthUser();
      if (user?.username) {
        await loginUser();
      }
    } catch (error) {
      console.log(error);
    }
    await setIsNotLoading();
  }

  useEffect(() => {
    retrieveData();
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
