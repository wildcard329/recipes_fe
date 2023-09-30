import { API, Storage, Auth } from "aws-amplify";

const useAmplify = () => {
  const myAPI = "recipes";
  const recipesPath = "/recipes";

  const ingsAPI = "ingredients";
  const ingsPath = "/ingredients";

  const userAPI = "recUsers";
  const userPath = "/users";

  const getIngredients = async () => await API.get(ingsAPI, ingsPath);

  const getUsers = async () => await API.get(userAPI, userPath);

  const getUserById = async (id) => await API.get(userAPI, `${userPath}/${id}`);

  const addUser = async (user) => await API.post(userAPI, userPath, { body: user });

  const authGoogle = async () => Auth.federatedSignIn({ provider: "Google" });

  const getGoogleAuthUser = async () => Auth.currentAuthenticatedUser();

  const signoutUser = async () => await Auth.signOut();

  const addAsset = async (filename, file) => await Storage.put(filename, file, { resumable: true });

  const getIngredientsAssets = async (data) => await Promise.all(data?.map(async (ingredient) => await ({ ...ingredient, ingredient_image: ingredient?.ingredient_img_key ? await Storage.get(ingredient?.ingredient_img_key) : null })));

  const getRecipesAssets = async (data) => await Promise.all(data?.map(async (recipe) => await ({ ...recipe, recipe_image: recipe?.recipe_image_key ? await Storage.get(recipe?.recipe_image_key) : null })));
  
  const getRecipeAsset = async (assetKey) => await Storage.get(assetKey);

  const getRecipes = async () => await API.get(myAPI, recipesPath);
  
  const getRecipeByIdAuthor = async (recipe_author, recipe_id) => await API.get(myAPI, `${recipesPath}/${recipe_author}/${recipe_id}`);

  const deleteRecipe = async (recipe_author, recipe_id) => await API.del(myAPI, `${recipesPath}/${recipe_author}/${recipe_id}`);
  
  const updateRecipe = async (recipe) => await API.put(myAPI, recipesPath, { body: recipe });

  const addRecipe = async (recipe) => await API.post(myAPI, recipesPath, { body: recipe });

  return { getRecipeAsset, getRecipesAssets, getIngredientsAssets, getRecipes, getRecipeByIdAuthor, deleteRecipe, updateRecipe, addRecipe, addAsset, authGoogle, getGoogleAuthUser, signoutUser, getIngredients, getUsers, getUserById, addUser };
};

export default useAmplify;
