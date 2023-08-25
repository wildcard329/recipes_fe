import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "aws-amplify";
import imgPlaceholder from "../assets/images/img_unavailable.jpg"

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
        {recipes?.map((recipe) => 
          <Link key={recipe?.recipe_id} className="recipe-card" to={`/recipe/:${recipe?.recipe_id}`} state={recipe}>
            <img src={imgPlaceholder} alt='recipe image' className="recipe-image" height={150} width={350} />
            <h3 className="card-text">{recipe?.recipe_name}</h3>
            <p className="card-text">{Math.floor(recipe?.recipe_total_time / 60)} hr {recipe?.recipe_total_time % 60} min</p>
          </Link>
        )}
      </section>
    </div>
  )
}

export default RecipesPage;
