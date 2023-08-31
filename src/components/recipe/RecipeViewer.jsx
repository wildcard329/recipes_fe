import { ListDisplay } from "../lists";
import imgPlaceholder from "../../assets/images/img_unavailable.jpg"
import { formatMinutes } from "../../utils/functions/format";
import { useBool } from "../../utils/customhooks";
import RecipeForm from "./RecipeForm";
import { AppButton } from "../button";
import "./RecipeViewer.css";
import { ImageLoader } from "../image";

const RecipeViewer = ({ recipe, recipeImage }) => {
  const {
    isTruthy: isEditing,
    setTruthy: setIsEditing,
    setNotTruthy: setNotIsEditing,
  } = useBool();

  return(
    <div className="recipe-info-page">
      {isEditing ?
        <p>Form coming soon!</p>
        // <RecipeForm recipeData={recipe} />
      :
      <>
        <h1>{recipe?.recipe_name}</h1>
        <section id="recipe-data" className="recipe-viewer-section">
          <ImageLoader image={recipeImage ? recipeImage : imgPlaceholder} imgAlt={'recipe-image'} id="recipe-info-image" />
          <div id="recipe-time" className="recipe-data-cluster highlight-line bg-vanilla">
            <span>Prep time: {formatMinutes(recipe?.recipe_prep_time)}</span>
            <span>Cook time: {formatMinutes(recipe?.recipe_cook_time)}</span>
            <span>Total time: {formatMinutes(recipe?.recipe_total_time)}</span>
          </div>
          <p className="recipe-details highlight-line bg-vanilla">{recipe?.recipe_description}</p>
        </section>
        <section id="recipe-prep">
          <div className="highlight-line bg-chocolate-cosmos">
            <ListDisplay title={'Tools'} data={recipe?.recipe_tools} />
          </div>
          <div className="highlight-line bg-chocolate-cosmos">
            <ListDisplay title={'Ingredients'} data={recipe?.recipe_ingredients} />
          </div>
        </section>
        <section id="recipe-instructions" className="bg-auburn highlight-line">
          <ListDisplay title={'Instructions'} data={recipe?.recipe_instructions} isOrderedList />
        </section>
        <section id="page-action-row" className="recipe-viewer-section">
          <AppButton btnLabel={"edit"} btnCb={setIsEditing} />
          <AppButton btnLabel={"delete"} />
        </section>
      </>
      }
    </div>
  )
}


export default RecipeViewer;
