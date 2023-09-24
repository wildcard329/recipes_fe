import { useState } from "react";
import { ingredientContext } from "../contexts";
import INGREDIENTS_JSON from "../../assets/configs/ingredients.json";

const IngredientProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState(INGREDIENTS_JSON);
  const [selectedIngredient, setSelectedIngredient] = useState({});

  const handleSelectIngredient = (ingredient) => setSelectedIngredient(ingredient);

  return(
    <ingredientContext.Provider value={{ ingredients, selectedIngredient, handleSelectIngredient }}>
      {children}
    </ingredientContext.Provider>
  )
}

export default IngredientProvider;
