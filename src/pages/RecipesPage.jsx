import React, { useEffect, useState, useContext } from "react";
import { useAmplify, useLocalStorage } from "../utils/customhooks/";
import { useBool } from "../utils/customhooks";
import { pageNavContext, userContext } from "../state/contexts";
import { RecipeCard } from "../components/recipe";
import { Spinner1 } from "../components/loader";
import "./page.css";

const RecipesPage = () => {
  const { setNavLinks } = useContext(pageNavContext);
  const { loginUser, isLoggedIn, verifyUser } = useContext(userContext);
  
  const { getRecipes, getRecipesAssets, getGoogleAuthUser } = useAmplify();
  const { getLocalStorageVal, removeLocalStorageVal } = useLocalStorage();
  const [recipes, setRecipes] = useState([]);
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setIsNotLoading,
  } = useBool();

  const checkUserAuth = async () => {
    const hasAttemptedLogin = getLocalStorageVal('hasAttemptedLogin');
    if (!isLoggedIn && hasAttemptedLogin) {
      try {
        const user = await getGoogleAuthUser();
        if (user?.username) {
          await loginUser();
          await verifyUser(user);
          await removeLocalStorageVal('hasAttemptedLogin');
        }
      } catch (error) {
        console.log(error);
      };
    };
  };

  const retrieveData = async () => {
    await setIsLoading();
    const { data } = await getRecipes();
    const updatedRecipes = await getRecipesAssets(data);
    setRecipes(updatedRecipes);
    await checkUserAuth();
    await setIsNotLoading();
  }

  useEffect(() => {
    retrieveData();
    setNavLinks([]);
  }, []);

  return (
    <>
      {isLoading ?
        <div className="space-buffer">
          <Spinner1 />
        </div>
      :
        <div className="recipes-container page-content">
          <h1>Browse Recipes</h1>
          <section id="recipes-section">
            {recipes?.map((recipe, index) => <RecipeCard key={`${recipe?.recipe_id}-${recipe?.recipe_name}-${index}`} recipe={recipe} />)}
          </section>
        </div>
      }
    </>
  )
}

export default RecipesPage;
