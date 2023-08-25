import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { RecipeCard } from "../components/recipe";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const { data: recipes } = await API.get('recipes', '/recipes');
    await setRecipes(recipes);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div className="recipes-container">
      <h1>Browse Recipes</h1>
      <section id="recipes-section">
        {recipes?.map((recipe) => <RecipeCard recipe={recipe} />)}
      </section>
    </div>
  )
}

export default RecipesPage;
