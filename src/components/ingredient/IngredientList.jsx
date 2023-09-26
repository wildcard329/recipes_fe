import { useContext } from "react";
import { List, ListItem, Button } from "@mui/material";
import { ingredientContext } from "../../state/contexts";
import "./IngredientList.css";

const IngredientList = () => {
  const { ingredients, handleSelectIngredient, selectedIngredient } = useContext(ingredientContext);

  return(
    <List disablePadding className="ingredients-list">
      {ingredients?.map(
        (ingredient) => 
          <ListItem disablePadding>
            <Button className="ingredient-button" fullWidth variant="outlined" onClick={() => handleSelectIngredient(ingredient)}>
              {ingredient?.ingredient_name}
            </Button>
          </ListItem>
      )}
    </List>
  )
}

export default IngredientList;
