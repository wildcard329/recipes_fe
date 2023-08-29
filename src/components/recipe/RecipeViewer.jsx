import { ListDisplay } from "../lists";
import imgPlaceholder from "../../assets/images/img_unavailable.jpg"
import { formatMinutes } from "../../utils/functions/format";
import { useBool } from "../../utils/customhooks";
import RecipeForm from "./RecipeForm";
import { AppButton } from "../button";

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
          <img src={recipeImage ? recipeImage : imgPlaceholder} alt='recipe-image' className="recipe-info-image" loading="lazy" />
          <aside className="recipe-info">
            <div className="recipe-data-cluster highlight-line bg-alice-blue">
              <span>Prep time: {formatMinutes(recipe?.recipe_prep_time)}</span>
              <span>Cook time: {formatMinutes(recipe?.recipe_cook_time)}</span>
              <span>Total time: {formatMinutes(recipe?.recipe_total_time)}</span>
            </div>
            <p className="highlight-line bg-white-smoke">{recipe?.recipe_description}</p>
          </aside>
        </section>
        <section id="recipe-preparation" className="recipe-viewer-section clear-float">
          <div className="recipe-list-cluster">
            <article className="highlight-line bg-navy min-height">
              <ListDisplay title={'Ingredients'} data={recipe?.recipe_ingredients} />
            </article>
            <article className="highlight-line bg-navy min-height">
              <ListDisplay title={'Tools'} data={recipe?.recipe_tools} />
            </article>
          </div>
        </section>
        <section id="recipe-instructions" className="recipe-viewer-section bg-slate highlight-line">
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
