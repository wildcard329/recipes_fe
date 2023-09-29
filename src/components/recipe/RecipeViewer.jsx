import { useContext } from "react";
import { recipeContext } from "../../state/contexts";
import { useAmplify, useBool } from "../../utils/customhooks";
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
  const { deleteRecipe } = useAmplify();
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
            <div className="row">
              <Button variant="outlined" className="viewer-btn" color="secondary">
                <RouterLink classname={"btn-link"} label={"edit"} path={`/recipes/${recipe?.recipe_id}/edit`} state={recipe} />
              </Button>
              <Button variant="outlined" className="viewer-btn" color="danger" onClick={setIsInterceptVisible}>
                delete
              </Button>
            </div>
          :
            <FunctionIntercept proceedCb={() => deleteRecipe(recipe?.recipe_author, recipe?.recipe_id)} cancelCb={setIntercipetIsNotVisible} interceptMessage={`Delete ${recipe?.recipe_name}?`} />}
        </div>
        <ImageLoader image={recipeImage ? recipeImage : imgPlaceholder} imgAlt={'recipe-image'} id="recipe-info-image" />
        <div id="recipe-time" className="bg-whitesmoke highlight-line min-height">
          <span>Prep time: {formatMinutes(recipe?.recipe_prep_time)}</span>
          <span>Cook time: {formatMinutes(recipe?.recipe_cook_time)}</span>
          <span>Total time: {formatMinutes(recipe?.recipe_total_time)}</span>
        </div>
        <p id="recipe-details" className="bg-whitesmoke highlight-line">{recipe?.recipe_description}</p>
      </section>
      <section id="recipe-prep">
        <a className="anchor-target" id="recipe-tools-ingredients"></a>
        <div className="bg-whitesmoke highlight-line m-1">
          <ListDisplay title={'Tools'} data={recipe?.recipe_tools} />
        </div>
        <div className="bg-whitesmoke highlight-line m-1">
          <ListDisplay title={'Ingredients'} data={recipe?.recipe_ingredients} />
        </div>
      </section>
      <section id="recipe-instructions" className="bg-whitesmoke highlight-line m-1">
        <a className="anchor-target" id="recipe-steps"></a>       
        <ListDisplay title={'Instructions'} data={recipe?.recipe_instructions} isOrderedList />
      </section>
    </div>
  )
}


export default RecipeViewer;
