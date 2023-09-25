import { useContext } from "react";
import { ingredientContext } from "../../state/contexts";
import assetNotAvailable from "../../assets/images/img_unavailable.jpg";
import "./IngredientDisplay.css";

const IngredientDisplay = () => {
  const { selectedIngredient } = useContext(ingredientContext);

  return(
    <div className="ingredients-data">
      {selectedIngredient ?
        <>
          <h3>{selectedIngredient.ingredient_name}</h3>
          <img className="ingredient-image" src={selectedIngredient.ingredient_img_key ? selectedIngredient?.ingredient_image : assetNotAvailable} alt="ingredient-image" />
          <p>{selectedIngredient.ingredient_description}</p>
        </>
      :
        null  
      }
    </div>
  )
}

export default IngredientDisplay;
