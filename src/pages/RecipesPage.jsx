import React, { useEffect, useState } from "react";
import { API, Storage } from "aws-amplify";
import { RecipeCard } from "../components/recipe";
import { useBool } from "../utils/customhooks";
import { Spinner1 } from "../components/loader";
import "./page.css";
import useFetch from "../utils/customhooks/useFetch";
import { useAmplify } from "../utils/customhooks/";

const RecipesPage = () => {
  const { getRecipes, getRecipesAssets } = useAmplify();
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
    await setIsNotLoading();
  }

  useEffect(() => {
    retrieveData();
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
