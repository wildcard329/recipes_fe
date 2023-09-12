import { useContext } from "react";
import { recipeContext } from "../../state/contexts";
import { useReactRouter } from "../../utils/customhooks";
import { formatMinutes } from "../../utils/functions/format";
import { ListDisplay } from "../lists";
import { AppButton } from "../button";
import { ImageLoader } from "../image";
import imgPlaceholder from "../../assets/images/img_unavailable.jpg"
import "./RecipeViewer.css";
import { RouterLink } from "../router";

const RecipeViewer = () => {
  const { recipe, asset: recipeImage } = useContext(recipeContext);

  return(
    <div className="recipe-info-page">
      <h1>{recipe?.recipe_name}</h1>
      <section id="recipe-display" className="recipe-viewer-section">
        <ImageLoader image={recipeImage ? recipeImage : imgPlaceholder} imgAlt={'recipe-image'} id="recipe-info-image" />
      </section>
      <section id="recipe-info">
        <div id="recipe-time" className="recipe-data-cluster highlight-line bg-whitesmoke">
          <span>Prep time: {formatMinutes(recipe?.recipe_prep_time)}</span>
          <span>Cook time: {formatMinutes(recipe?.recipe_cook_time)}</span>
          <span>Total time: {formatMinutes(recipe?.recipe_total_time)}</span>
        </div>
        <p id="recipe-details" className="highlight-line bg-whitesmoke">{recipe?.recipe_description}</p>
      </section>
      <section id="recipe-prep">
        <div className="highlight-line bg-whitesmoke">
          <ListDisplay title={'Tools'} data={recipe?.recipe_tools} />
        </div>
        <div className="highlight-line bg-whitesmoke">
          <ListDisplay title={'Ingredients'} data={recipe?.recipe_ingredients} />
        </div>
      </section>
      <section id="recipe-instructions" className="highlight-line bg-whitesmoke">
        <ListDisplay title={'Instructions'} data={recipe?.recipe_instructions} isOrderedList />
      </section>
    </div>
  )
}


export default RecipeViewer;
