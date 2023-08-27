import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { useBool, useReactRouter } from "../utils/customhooks";
import imgPlaceholder from "../assets/images/img_unavailable.jpg"
import { OrderedList, UnorderedList } from "../components/lists";
import { formatMinutes } from "../utils/functions/format";
import AppLoader from "../components/loader/AppLoader";

const RecipeViewerPage = () => {
  const {
    isTruthy: isLoading,
    setTruthy: setIsLoading,
    setNotTruthy: setNotIsLoading,
  } = useBool();

  const [recipe, setRecipe] = useState({});
  const { locationState: { recipe_id, recipe_author } } = useReactRouter();
  const prepTime = formatMinutes(recipe?.recipe_prep_time);
  const cookTime = formatMinutes(recipe?.recipe_cook_time);
  const totalTime = formatMinutes(recipe?.recipe_total_time);

  const getRecipe = async () => {
    setIsLoading();
    const { data: recipe } = await API.get('recipes', `/recipes/${recipe_author}/${recipe_id}`);
    await setRecipe(recipe);
    setNotIsLoading();
  };

  useEffect(() => {
    getRecipe();
  }, []);
  return(
    <>
      {
        isLoading ?
          <div className="space-buffer">
            <AppLoader />
          </div>
        : 
          <div className="recipe-info-page">
            <h1>{recipe?.recipe_name}</h1>
            <section id="recipe-data" className="recipe-viewer-section">
              <img src={imgPlaceholder} alt='recipe-image' className="recipe-info-image" />
              <aside className="recipe-info">
                <div className="recipe-data-cluster highlight-line bg-alice-blue">
                  <span>Prep time: {prepTime}</span>
                  <span>Cook time: {cookTime}</span>
                  <span>Total time: {totalTime}</span>
                </div>
                <p className="highlight-line bg-white-smoke">{recipe?.recipe_description}</p>
              </aside>
            </section>
            <section id="recipe-preparation" className="recipe-viewer-section clear-float">
              <div className="recipe-list-cluster">
                <article className="highlight-line bg-navy min-height">
                  <UnorderedList title={'Ingredients'} data={recipe?.recipe_ingredients} />
                </article>
                <article className="highlight-line bg-navy min-height">
                  <UnorderedList title={'Tools'} data={recipe?.recipe_tools} />
                </article>
              </div>
            </section>
            <section id="recipe-instructions" className="recipe-viewer-section bg-slate highlight-line">
              <OrderedList title={'Instructions'} data={recipe?.recipe_instructions} />
            </section>
          </div>
      }
    </>
  )
}

export default RecipeViewerPage;
