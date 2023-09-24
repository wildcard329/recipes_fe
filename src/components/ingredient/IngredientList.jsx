import { useContext } from "react";
import { ingredientContext } from "../../state/contexts";
import "./IngredientList.css";

const IngredientList = () => {
  const { ingredients, handleSelectIngredient } = useContext(ingredientContext);

  return(
    <ul className="ingredients-list">
      {ingredients.map((ingredient) => <li className="ingredients-list-item" onClick={() => handleSelectIngredient(ingredient)} key={ingredient.ingredient_id}><button>{ingredient.ingredient_name}</button></li>)}
    </ul>
  )
}

export default IngredientList;
