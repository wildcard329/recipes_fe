import React, { useEffect, useState } from "react";
import { API, Storage } from "aws-amplify";
import { RecipeCard } from "../components/recipe";
import { useBool } from "../utils/customhooks";
import { Spinner1 } from "../components/loader";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setIsNotLoading,
  } = useBool();

  const addImgAttr = async (recs) => await Promise.all(recs?.map(async (recipe) => await ({ ...recipe, recipe_image: recipe?.recipe_image_key ? await Storage.get(recipe?.recipe_image_key) : null })));

  const getRecipes = async () => {
    setIsLoading();
    const { data: recipes } = await API.get('recipes', '/recipes');
    await setRecipes(recipes);
    const updatedRecipes = await addImgAttr(recipes);
    await setRecipes(updatedRecipes);
    setIsNotLoading();
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <>
      {isLoading ?
        <div className="space-buffer">
          <Spinner1 />
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
