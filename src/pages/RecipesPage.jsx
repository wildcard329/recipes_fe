import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { RecipeCard } from "../components/recipe";
import { useBool } from "../utils/customhooks";
import AppLoader from "../components/loader/AppLoader";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setIsNotLoading,
  } = useBool();

  const getRecipes = async () => {
    setIsLoading();
    const { data: recipes } = await API.get('recipes', '/recipes');
    await setRecipes(recipes);
    setIsNotLoading();
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      {isLoading ?
        <div className="space-buffer">
          <AppLoader />
        </div>
      :
        <div className="recipes-container">
          <h1>Browse Recipes</h1>
          <section id="recipes-section">
            {recipes?.map((recipe) => <RecipeCard recipe={recipe} />)}
          </section>
        </div>
      }
    </>
  )
}

export default RecipesPage;
