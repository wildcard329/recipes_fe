import React, { useEffect, useState } from "react";
import { API } from "aws-amplify";

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    API.get('recipes', '/recipes')
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <p>Recipes works!</p>
  )
}

export default RecipesPage;
