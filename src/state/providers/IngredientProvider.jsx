import { useEffect, useState } from "react";
import { ingredientContext } from "../contexts";
import { useAmplify } from "../../utils/customhooks";

const IngredientProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState({});
  const { getIngredients, getIngredientsAssets } = useAmplify();

  const handleSelectIngredient = (ingredient) => setSelectedIngredient(ingredient);

  const fetchIngredients = async () => {
    console.log('fetched')
    const { data } = await getIngredients();
    const updatedData = await getIngredientsAssets(data);
    setIngredients(updatedData);
  };

  useEffect(() => {
    fetchIngredients();
  }, []);

  return(
    <ingredientContext.Provider value={{ ingredients, selectedIngredient, handleSelectIngredient, setIngredients }}>
      {children}
    </ingredientContext.Provider>
  )
}

export default IngredientProvider;
