import { API, Storage } from "aws-amplify";

const useAmplify = () => {
  const myAPI = "recipes";
  const recipesPath = "/recipes";

  const addAsset = async (filename, file) => await Storage.put(filename, file, { resumable: true });

  const getRecipesAssets = async (data) => await Promise.all(data?.map(async (recipe) => await ({ ...recipe, recipe_image: recipe?.recipe_image_key ? await Storage.get(recipe?.recipe_image_key) : null })));
  
  const getRecipeAsset = async (assetKey) => await Storage.get(assetKey);

  const getRecipes = async () => await API.get(myAPI, recipesPath).catch((error) => console.log(error));
  
  const getRecipeByIdAuthor = async (recipe_author, recipe_id) => await API.get(myAPI, `${recipesPath}/${recipe_author}/${recipe_id}`);

  const deleteRecipe = async (recipe_author, recipe_id) => await API.del(myAPI, `${recipesPath}/${recipe_author}/${recipe_id}`).catch((error) => console.log(error));
  
  const updateRecipe = async (recipe) => await API.put(myAPI, recipesPath, { body: recipe });

  const addRecipe = async (recipe) => await API.post(myAPI, recipesPath, { body: recipe });

  return { getRecipeAsset, getRecipesAssets, getRecipes, getRecipeByIdAuthor, deleteRecipe, updateRecipe, addRecipe, addAsset };
}

export default useAmplify;
