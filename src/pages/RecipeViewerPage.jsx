import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import { useReactRouter } from "../utils/customhooks";
import imgPlaceholder from "../assets/images/img_unavailable.jpg"
import { OrderedList, UnorderedList } from "../components/lists";

const RecipeViewerPage = () => {
  const [recipe, setRecipe] = useState({});
  const { locationState: { recipe_id, recipe_author } } = useReactRouter();

  const getRecipe = async () => {
    const { data: recipe } = await API.get('recipes', `/recipes/${recipe_author}/${recipe_id}`);
    await setRecipe(recipe);
  };

  const formatTime = (time) => {
    let outputStr;
    const hours = Math.floor(time/60);
    const mins = time % 60;
    hours > 0 && mins > 0 ? 
      outputStr = `${hours} hr ${mins} min` 
    : hours > 0 && mins === 0 ? 
      outputStr = `${hours} hr`
    : outputStr = `${mins} min`;
    return outputStr;
  }

  useEffect(() => {
    getRecipe();
  }, []);
  return(
    <div className="recipe-info-page">
      <img src={imgPlaceholder} alt='recipe-image' className="recipe-info-image" width={500} height={250} />
      <h2>{recipe?.recipe_name}</h2>
      <div className="recipe-data-cluster">
        <span>Prep time: {formatTime(recipe?.recipe_prep_time)}</span>
        <span>Cook time: {formatTime(recipe?.recipe_cook_time)}</span>
        <span>Total time: {formatTime(recipe?.recipe_total_time)}</span>
      </div>
      <p>{recipe?.recipe_description}</p>
      <div className="recipe-list-cluster">
        <UnorderedList title={'Ingredients'} data={recipe?.recipe_ingredients} />
        <UnorderedList title={'Tools'} data={recipe?.recipe_tools} />
      </div>
      <OrderedList title={'Instructions'} data={recipe?.recipe_instructions} />
    </div>
  )
}

export default RecipeViewerPage;
