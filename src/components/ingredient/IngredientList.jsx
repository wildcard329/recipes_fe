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
          <ListItem disablePadding key={ingredient?.ingredient_id}>
            <Button 
              style={{ color: `${ingredient === selectedIngredient ? "white" : "black"}`}}
              className="ingredient-button" 
              color={ingredient === selectedIngredient ? "accent" : "primary"} 
              fullWidth variant={ingredient === selectedIngredient ? "contained" : "outlined"} 
              onClick={() => handleSelectIngredient(ingredient)}
            >
              {ingredient?.ingredient_name}
            </Button>
          </ListItem>
      )}
    </List>
  )
}

export default IngredientList;
