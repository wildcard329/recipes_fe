import { useContext } from "react";
import { ingredientContext } from "../../state/contexts";
import assetNotAvailable from "../../assets/images/img_unavailable.jpg";
import "./IngredientDisplay.css";

const IngredientDisplay = ({ ingredient }) => {
  const { selectedIngredient } = useContext(ingredientContext);

  return(
    <div className="ingredients-data">
      {!!selectedIngredient && <h3>{selectedIngredient.ingredient_name}</h3>}
      {!!selectedIngredient && (selectedIngredient.ingredient_img_key ? null : <img className="ingredient-image" src={assetNotAvailable} alt="ingredient-image" />)}
      {!!selectedIngredient && <p>{selectedIngredient.ingredient_description}</p>}
    </div>
  )
}

export default IngredientDisplay;
