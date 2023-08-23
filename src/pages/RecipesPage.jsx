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
      {recipes ? recipes?.map((recipe) => 
        <Link key={recipe?.recipe_id} className="recipe-card" to={`/recipe/:${recipe?.recipe_id}`} state={recipe}>
          <img src={imgPlaceholder} alt='recipe image' className="recipe-image" height={150} width={300} />
          <h3>{recipe?.recipe_name}</h3>
          <span>{Math.floor(recipe?.recipe_total_time / 60)} hr {recipe?.recipe_total_time % 60} min</span>
        </Link>
      )
      : null    
    }
    </div>
  )
}

export default RecipesPage;
