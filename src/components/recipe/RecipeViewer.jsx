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
      <section id="general-info" className="recipe-viewer-section">
        <a className="anchor-target" id="recipe-info"></a>
        <div className="header-row">
          <h1 id="recipe-title">{recipe?.recipe_name}</h1>

        </div>
        <ImageLoader image={recipeImage ? recipeImage : imgPlaceholder} imgAlt={'recipe-image'} id="recipe-info-image" />
        <div id="recipe-time">
          <span>Prep time: {formatMinutes(recipe?.recipe_prep_time)}</span>
          <span>Cook time: {formatMinutes(recipe?.recipe_cook_time)}</span>
          <span>Total time: {formatMinutes(recipe?.recipe_total_time)}</span>
        </div>
        <p id="recipe-details">{recipe?.recipe_description}</p>
      </section>
      <section id="recipe-prep">
        <a className="anchor-target" id="recipe-tools-ingredients"></a>
        <div>
          <ListDisplay title={'Tools'} data={recipe?.recipe_tools} />
        </div>
        <div>
          <ListDisplay title={'Ingredients'} data={recipe?.recipe_ingredients} />
        </div>
      </section>
      <section id="recipe-instructions">
        <a className="anchor-target" id="recipe-steps"></a>       
        <ListDisplay title={'Instructions'} data={recipe?.recipe_instructions} isOrderedList />
      </section>
      <div className="action-row">
        <RouterLink label={"edit"} path={`/recipes/${recipe?.recipe_id}/edit`} state={recipe} />
        <AppButton btnLabel={"delete"} classname={"danger"} />
      </div>
    </div>
  )
}


export default RecipeViewer;
