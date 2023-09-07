import { generateRandomNumber } from "./randomNumberGenerator.js";

export const generateRecipeTemplate = () => {
  const recipeTemplate = {
      recipe_id: generateRandomNumber(),
      recipe_name: "",
      recipe_description: "",
      recipe_prep_time: "",
      recipe_cook_time: "",
      recipe_total_time: "",
      recipe_author: "Greg",
      recipe_image_key: "",
      recipe_image: "",
      recipe_ingredients: [],
      recipe_tools: [],
      recipe_categories: [],
      recipe_instructions: [],
    };
  return recipeTemplate;
};
