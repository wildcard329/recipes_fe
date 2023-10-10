import { generateId } from "./idGenerator";

export const generateRecipeTemplate = () => {
  const recipeTemplate = {
      recipe_id: generateId(),
      recipe_name: "",
      recipe_description: "",
      recipe_prep_time: "",
      recipe_cook_time: "",
      recipe_total_time: "",
      recipe_author: "",
      recipe_image_key: "",
      recipe_image: "",
      recipe_ingredients: [],
      recipe_tools: [],
      recipe_categories: [],
      recipe_instructions: [],
    };
  return recipeTemplate;
};
