import { useContext } from "react";
import { recipeContext } from "../../state/contexts";
import { useBool } from "../../utils/customhooks";
import { formatMinutes } from "../../utils/functions/format";
import { ListDisplay } from "../lists";
import { ImageLoader } from "../image";
import { FunctionIntercept } from "../intercept";
import imgPlaceholder from "../../assets/images/img_unavailable.jpg"
import "./RecipeViewer.css";
import { RouterLink } from "../router";
import { Button } from "@mui/material";

const RecipeViewer = () => {
  const { recipe, asset: recipeImage } = useContext(recipeContext);
  const {
    isTruthy: isInterceptVisible,
    setTruthy: setIsInterceptVisible,
    setNotTruthy: setIntercipetIsNotVisible,
  } = useBool();

  return(
    <div className="recipe-info-page">
      <section id="general-info" className="recipe-viewer-section">
        <a className="anchor-target" id="recipe-info"></a>
        <div className="header-row">
          <h1 id="recipe-title">{recipe?.recipe_name}</h1>
          {!isInterceptVisible ?
            <>
              <Button variant="outlined" className="viewer-btn" color="secondary">
                <RouterLink classname={"btn-link"} label={"edit"} path={`/recipes/${recipe?.recipe_id}/edit`} state={recipe} />
              </Button>
              <Button variant="outlined" className="viewer-btn" color="danger" onClick={setIsInterceptVisible}>
                delete
              </Button>
            </>
          :
            <FunctionIntercept proceedCb={null} cancelCb={setIntercipetIsNotVisible} interceptMessage={`Delete ${recipe?.recipe_name}?`} />}
          {/* <RouterLink label={"edit"} path={`/recipes/${recipe?.recipe_id}/edit`} state={recipe} />
          <AppButton btnLabel={"delete"} classname={"danger"} /> */}
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
    </div>
  )
}


export default RecipeViewer;
