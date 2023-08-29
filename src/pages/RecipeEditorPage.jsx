import { useState } from "react";
import { RecipeForm } from "../components/recipe"

const RecipeEditorPage = () => {
  const recipe = {
    recipe_name: "",
    recipe_description: "",
    recipe_prep_time: "",
    recipe_cook_time: "",
    recipe_total_time: "",
    recipe_author: "",
    recipe_ingredients: [],
    recipe_tools: [],
    recipe_categories: [],
    recipe_instructions: [],
  }

  return(
    <RecipeForm recipeData={recipe} />
  )
}

export default RecipeEditorPage;
